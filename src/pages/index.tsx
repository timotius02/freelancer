import React from "react";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import Post from "../components/post";

const Home: NextPage = () => {
  const posts = trpc.jobs.getAll.useQuery();
  return (
    <div className="container mx-auto">
      <div>
        {posts.data
          ? posts.data.map((post) => <Post key={post.id} post={post} />)
          : "Posts are loading..."}
      </div>
    </div>
  );
};

export default Home;
