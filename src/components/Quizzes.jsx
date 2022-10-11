import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

const Quizzes = () => {
  const [marks, setMarks] = useState(0);
  const quizzes = useLoaderData().data;
  const { name, questions } = quizzes;

  return (
    <div className="w-11/12 mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">{name} Quizzes</h2>
      <div className="grid md:grid-cols-4">
        <QuizResult marks={marks} />
        <div className="md:col-span-3 ">
          {questions.map((question, index) => (
            <QuizQuestion
              key={question.id}
              singleQuestion={question}
              serialNumber={index}
              marks={marks}
              setMarks={setMarks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
