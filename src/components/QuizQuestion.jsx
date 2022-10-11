import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import QuizOptions from "./QuizOptions";

const QuizQuestion = ({ singleQuestion, serialNumber, marks, setMarks }) => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const { question, options, correctAnswer } = singleQuestion;
  return (
    <div className="md:w-3/4 mx-auto mb-10 p-3 border-2 rounded-lg">
      <h3 className="font-ubuntuCode text-left text-xl md:text-2xl pr-9 md:pr-12 mb-3 relative">
        <span>Quiz {serialNumber + 1}: </span>
        {question}{" "}
        <button
          onClick={() => setIsEyeOpen(!isEyeOpen)}
          className="cursor-pointer"
        >
          <FontAwesomeIcon
            className="absolute right-1 top-1 hover:text-primary transition-all duration-300"
            icon={faEye}
          />
        </button>
      </h3>
      <ul className="grid md:grid-cols-2 text-start gap-2">
        {options.map((option, index) => (
          <QuizOptions
            key={index}
            option={option}
            serialNumber={serialNumber}
            correctAnswer={correctAnswer}
            marks={marks}
            setMarks={setMarks}
          />
        ))}
      </ul>
      {isEyeOpen && (
        <p className="bg-success text-primary font-bold px-2 py-3 rounded-lg">
          Correct Answer:{" "}
          <span className="text-secondary">{correctAnswer}</span>
        </p>
      )}
    </div>
  );
};

export default QuizQuestion;
