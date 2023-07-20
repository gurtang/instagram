import React from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
function Post({ img, userImg, caption, id, key, username }) {
  const { data: session } = useSession();
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
            <HeartIcon className={"btn"} />
            <ChatBubbleOvalLeftEllipsisIcon className={"btn"} />
          </div>
          <BookmarkIcon className={"btn"} />
        </div>
      )}

      {/*post comments */}
      <p className={"p-5 truncate"}>
        <span className={"font-bold mr-2 "}>{username}</span> {caption}
      </p>
      {/*input box*/}
      {session && (
        <form className={"flex items-center p-4"}>
          <FaceSmileIcon className={"h-7"} />
          <input
            type={"tex"}
            placeholder={"Enter your comment..."}
            className={"border-none flex-1 focus:ring-0"}
          />
          <button className={"text-blue-400 font-bold"}>Post</button>
        </form>
      )}
    </div>
  );
}

export default Post;
