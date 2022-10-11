import React from "react";

const QuizResult = ({ marks }) => {
  return (
    <div className="col-span-1 relative">
      <div className="card w-96 bg-base-100 shadow-xl md:sticky top-0">
        <div className="card-body">
          <h2 className="card-title text-4xl">Quiz Result</h2>
          <p className="text-start text-3xl">Marks: {marks}</p>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
