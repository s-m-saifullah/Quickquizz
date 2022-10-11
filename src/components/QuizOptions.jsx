import React from "react";

const QuizOptions = ({ option, serialNumber }) => {
  return (
    <div className="p-3 group hover:bg-slate-400 rounded-lg">
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-3">
          <input
            type="radio"
            name={serialNumber}
            className="radio checked:bg-blue-500 group-hover:bg-white"
          />
          <span className="group-hover:text-white label-text">{option}</span>
        </label>
      </div>
    </div>
  );
};

export default QuizOptions;
