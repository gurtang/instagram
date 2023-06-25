import React from "react";
import Stories from "@/components/Stories";
import Posts from "@/components/Posts";

function Feed() {
  return (
    <main className={"grid grid-col-1 md:grid-cols-3 md:max-w-6xl mx-auto"}>
      <section className={"md:col-span-2"}>
        <Stories />
        <Posts />
      </section>
      <section className={"hidden md:inline-grid md:col-span-1"}>
        {/*mini profile */}
        {/*suggestisons*/}
      </section>
    </main>
  );
}

export default Feed;
