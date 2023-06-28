import React from "react";
import Stories from "@/components/Stories";
import Posts from "@/components/Posts";
import MiniProfile from "@/components/MiniProfile";
import Suggestions from "@/components/Suggestions";

function Feed() {
  return (
    <main className={"grid grid-col-1 md:grid-cols-3 md:max-w-6xl mx-auto"}>
      <section className={"md:col-span-2"}>
        <Stories />
        <Posts />
      </section>
      <section className={"hidden md:inline-grid md:col-span-1"}>
        <div className={""}>
          <div className={"fixed w-[380px]"}>
            <MiniProfile />
            <Suggestions />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Feed;
