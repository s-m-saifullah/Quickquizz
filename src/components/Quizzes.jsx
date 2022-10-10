import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";

const Quizzes = () => {
  const quizzes = useLoaderData().data;
  const { name, questions } = quizzes;
  return (
    <div className="w-11/12 mx-auto text-center">
      <h2>{name} Quizzes</h2>
      {questions.map((question) => (
        <QuizQuestion key={question.id} singleQuestion={question} />
      ))}
    </div>
  );
};

export default Quizzes;
