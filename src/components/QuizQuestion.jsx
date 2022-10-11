import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import QuizOptions from "./QuizOptions";

const QuizQuestion = ({ singleQuestion, serialNumber }) => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const { question, options, correctAnswer } = singleQuestion;
  return (
    <div className="md:w-2/4 mx-auto mb-10 p-3 border-2 rounded-lg">
      <h3 className="font-ubuntuCode text-xl mb-3">
        <span>Quiz {serialNumber + 1}: </span>
        {question}{" "}
        <button
          onClick={() => setIsEyeOpen(!isEyeOpen)}
          className="cursor-pointer"
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      </h3>
      <ul className="grid md:grid-cols-2">
        {options.map((option, index) => (
          <QuizOptions
            key={index}
            option={option}
            serialNumber={serialNumber}
          />
        ))}
      </ul>
      {isEyeOpen && <p>Correct Answer: {correctAnswer}</p>}
    </div>
  );
};

export default QuizQuestion;
