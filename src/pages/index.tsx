import React from "react";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  return (
    <div>
      <div>{hello.data ? hello.data.greeting : "Loading tRPC query..."}</div>
    </div>
  );
};

export default Home;
