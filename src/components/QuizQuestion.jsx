import React from "react";

const QuizQuestion = ({ singleQuestion }) => {
  console.log(singleQuestion);
  const { question, options } = singleQuestion;
  return (
    <div className="mb-10">
      <h3>{question}</h3>
      {options.map((option) => (
        <li className="list-none">{option}</li>
      ))}
    </div>
  );
};

export default QuizQuestion;
