import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";

const Quizzes = () => {
  const quizzes = useLoaderData().data;
  const { name, questions } = quizzes;

  return (
    <div className="w-11/12 mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">{name} Quizzes</h2>
      <div className="grid">
        {questions.map((question, index) => (
          <QuizQuestion
            key={question.id}
            singleQuestion={question}
            serialNumber={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
