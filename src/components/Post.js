import React from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
function Post({ img, userImg, caption, id, key, username }) {
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
      <div className={"flex  justify-between px-4 pt-4"}>
        <div className={"flex space-x-4"}>
          <HeartIcon className={"btn"} />
          <ChatBubbleOvalLeftEllipsisIcon className={"btn"} />
        </div>
        <BookmarkIcon className={"btn"} />
      </div>
    </div>
  );
}

export default Post;
