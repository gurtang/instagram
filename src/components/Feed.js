import React from "react";
import Stories from "@/components/Stories";
import Posts from "@/components/Posts";

function Feed() {
  return (
    <main>
      <section className={""}>
        <Stories />
        <Posts />
      </section>
      <section>
        {/*mini profile */}
        {/*suggestisons*/}
      </section>
    </main>
  );
}

export default Feed;
