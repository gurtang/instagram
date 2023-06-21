import React from "react";
import Post from "@/components/Post";

function Posts() {
  const posts = [
    {
      id: "1",
      username: "gurtang",
      userImg:
        "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
      img: "https://plus.unsplash.com/premium_photo-1673002094173-b16f2b946780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      caption: "Planina ba :D",
    },
    {
      id: "2",
      username: "upaczadrinje",
      userImg:
        "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
      img: "https://plus.unsplash.com/premium_photo-1686975618041-8f4971436c47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=811&q=80",
      caption: "Suma",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      )
    </div>
  );
}

export default Posts;
