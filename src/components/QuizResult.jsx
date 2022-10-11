import React from "react";

const QuizResult = ({ marks }) => {
  return (
    <div className="md:col-span-1 md:relative">
      <div className="card w-full bg-base-100 shadow-xl md:sticky top-0">
        <div className="card-body">
          <h2 className="card-title text-2xl md:text-3xl lg:text-4xl">
            Quiz Result
          </h2>
          <p className="text-start text-xl md:text-2xl lg:text-3xl">
            Marks: {marks}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
