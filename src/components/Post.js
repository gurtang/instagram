import React, { useEffect, useState } from "react";
import {
  EllipsisHorizontalIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  FaceSmileIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Moment from "react-moment";
// import { session } from "next-auth/core/routes";

function Post({ img, userImg, caption, id, key, username }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const unsubsribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  useEffect(() => {
    const unsubsribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);
  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  }

  async function sendComment(event) {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }
  return (
    <div className={"bg-white my-7 border rounded-md"}>
      {/* post header*/}
      <div className={"flex items-center p-5 "}>
        <img
          src={userImg}
          alt={username}
          className={"h-12 rounded-full object-cover border p-1 mr-3 "}
        />
        <p className={"font-bold flex-1"}>{username}</p>
        <EllipsisHorizontalIcon class="h-5" />
      </div>

      <img className={"object-cover w-full"} src={img} alt={""} />
      {/*Post Buttons*/}
      {session && (
        <div className={"flex  justify-between px-4 pt-4"}>
          <div className={"flex space-x-4"}>
            {hasLiked ? (
              <HeartIconSolid
                onClick={likePost}
                className={"btn text-red-400"}
              />
            ) : (
              <HeartIcon onClick={likePost} className={"btn"} />
            )}
            <ChatBubbleOvalLeftEllipsisIcon className={"btn"} />
          </div>
          <BookmarkIcon className={"btn"} />
        </div>
      )}

      {/*post comments */}
      <p className={"p-5 truncate"}>
        <span className={"font-bold mr-2 "}>{username}</span> {caption}
      </p>
      {comments.length > 0 && (
        <div className={"mx-10 max-h-24 overflow-y-scroll scrollbar-none"}>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={"flex items-center space-x-2 mb-2"}
            >
              <img
                className={"rounded-full h-7 object-cover"}
                src={comment.data().userImage}
                alt={"user-image"}
              />
              <p className={"font-semibold "}> {comment.data().username}</p>
              <p className={"flex-1 truncate"}> {comment.data().comment}</p>
              <Moment fromNow className={""}>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/*input box*/}
      {session && (
        <form className={"flex items-center p-4"}>
          <FaceSmileIcon className={"h-7"} />
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            type={"tex"}
            placeholder={"Enter your comment..."}
            className={"border-none flex-1 focus:ring-0"}
          />
          <button
            type={"submit"}
            disabled={!comment.trim()}
            onClick={sendComment}
            className={"text-blue-400 font-bold disabled:text-blue-200"}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
