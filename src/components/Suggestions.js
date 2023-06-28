"use client";
import React, { useEffect, useState } from "react";
const items = [
  {
    username: "pera",
    img: "https://i.pravatar.cc/150?img=1",
    id: 1,
    jobTitle: "alkos",
  },
  {
    username: "mika",
    img: "https://i.pravatar.cc/150?img=2",
    id: 2,
    jobTitle: "profesor",
  },
  {
    username: "zika",
    img: "https://i.pravatar.cc/150?img=3",
    id: 3,
    jobTitle: "frizer",
  },
  {
    username: "zule",
    img: "https://i.pravatar.cc/150?img=4",
    id: 4,
    jobTitle: "programer",
  },
  {
    username: "sekula",
    img: "https://i.pravatar.cc/150?img=5",
    id: 5,
    jobTitle: "zenskaros",
  },
  {
    username: "micko",
    img: "https://i.pravatar.cc/150?img=6",
    id: 6,
    jobTitle: "bodibilder",
  },
  {
    username: "laza",
    img: "https://i.pravatar.cc/150?img=7",
    id: 7,
    jobTitle: "banderas",
  },
  {
    username: "petar",
    img: "https://i.pravatar.cc/150?img=8",
    id: 8,
    jobTitle: "navijac",
  },
  {
    username: "natasa",
    img: "https://i.pravatar.cc/150?img=9",
    id: 9,
    jobTitle: "prositutka",
  },
];
function Suggestions(props) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(items);
  }, []);
  return (
    <div className={"mt-4 ml-10 "}>
      <div className={"flex justify-between mb-5 text-sm"}>
        <h3 className={"font-bold text-gray-400"}>Suggestion for you</h3>
        <button className={"text-gray-600 font-semibold"}>See all</button>
      </div>
      {suggestions.map((suggestion) => (
        <div className={"flex items-center justify-between mt-3 "}>
          <img
            className={"h-10 rounded-full border p-[2px]"}
            src={suggestion.img}
          />
          <div className={"flex-1 ml-4"}>
            <h2 className={"font-semibold text-sn"}>{suggestion.username}</h2>
            <h3 className={"text-sm text-gray-400 truncate w-[230px]"}>
              {suggestion.jobTitle}
            </h3>
          </div>
          <button className={"font-semibold text-blue-400 text-sm"}>
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
