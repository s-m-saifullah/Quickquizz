import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import Topic from "./Topic";

const Home = () => {
  const topics = useLoaderData();

  return (
    <div>
      <Hero />
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
