import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-16"
        style={{ backgroundImage: `url("/hero-bg.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome To{" "}
              <span className="font-baloo font-bold">quickquizz</span>
            </h1>
            <p className="mb-5">
              How confident are you with your web development knowledge? Test
              your knowledge with our quizzes.
            </p>
            <a href="#topics">
              <button className="btn btn-primary">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
