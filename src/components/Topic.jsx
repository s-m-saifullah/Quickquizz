import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  return (
    <div className="card card-compact w-full bg-slate-500 shadow-xl">
      <figure className="bg-slate-900">
        <img src={logo} alt={`${name}-logo`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Questions: {total}</p>
        <Link className="card-actions" to={`/quiz/${id}`}>
          <button className="btn btn-primary w-full">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
