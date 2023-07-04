"use client";
import Stories from "@/components/Stories";
import Posts from "@/components/Posts";
import MiniProfile from "@/components/MiniProfile";
import Suggestions from "@/components/Suggestions";
import { useSession } from "next-auth/react";

function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid ${
        session
          ? "grid-col-1 md:grid-cols-3 md:max-w-6xl mx-auto"
          : "grid-col-1 md:grid-cols-2 md:max-w-3xl mx-auto"
      } `}
    >
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
