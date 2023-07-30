"use client";
import React, { useEffect, useState } from "react";
// import minifaker from "minifaker";
// import "minifaker/locales/en";
import Story from "@/components/Story";
import { useRecoilState } from "recoil";
import { userState } from "../../atom/userAtom";

const items = [
  { username: "pera", img: "https://i.pravatar.cc/150?img=1", id: 1 },
  { username: "mika", img: "https://i.pravatar.cc/150?img=2", id: 2 },
  { username: "zika", img: "https://i.pravatar.cc/150?img=3", id: 3 },
  { username: "zule", img: "https://i.pravatar.cc/150?img=4", id: 4 },
  { username: "sekula", img: "https://i.pravatar.cc/150?img=5", id: 5 },
  { username: "micko", img: "https://i.pravatar.cc/150?img=6", id: 6 },
  { username: "laza", img: "https://i.pravatar.cc/150?img=7", id: 7 },
  {
    username: "petar.petrovic.njegos",
    img: "https://i.pravatar.cc/150?img=8",
    id: 8,
  },
  { username: "natasa", img: "https://i.pravatar.cc/150?img=9", id: 9 },
];
function Stories() {
  const [currentUser] = useRecoilState(userState);
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    // const storyUsers = minifaker.array(20, (i) => [
    //   {
    //     username: minifaker.username({ locale: "en" }).toLowerCase(),
    //     img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
    //     id: i,
    //   },
    // ]);
    // setStoryUsers(storyUsers);
    setStoryUsers(items);
  }, []);
  return (
    <div
      className={
        "flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-track-blue-300"
      }
    >
      {currentUser && (
        <Story
          img={currentUser?.userImg}
          username={currentUser?.username}
          isUser={"true"}
        />
      )}
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}

export default Stories;
