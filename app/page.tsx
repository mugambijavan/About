"use client";

import Grid from "@/components/Grid";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Grid />
        <Experience />
        <Approach />
      </div>
    </main>
  );
};

export default Home;
