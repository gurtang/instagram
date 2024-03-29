"use client";
import Stories from "@/components/Stories";
import Posts from "@/components/Posts";
import MiniProfile from "@/components/MiniProfile";
import Suggestions from "@/components/Suggestions";
import { useRecoilState } from "recoil";
import { userState } from "../../atom/userAtom";

function Feed() {
  const [currentUser] = useRecoilState(userState);
  return (
    <main
      className={`grid ${
        currentUser
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
