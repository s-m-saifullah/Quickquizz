import React, { createRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizOptions = ({
  option,
  serialNumber,
  correctAnswer,
  marks,
  setMarks,
}) => {
  const detailsRef = createRef();
  const handledOptionClick = (option) => {
    const { checked } = detailsRef.current;

    if (option === correctAnswer) {
      toast.success("Correct", { autoClose: 500, toastId: serialNumber });
      setMarks(marks + 1);
    } else {
      toast.error("Incorrect", { autoClose: 500, toastId: serialNumber });
      if (marks > 0) {
        setMarks(marks - 1);
      }
    }
  };
  return (
    <div
      onChange={() => handledOptionClick(option)}
      className="p-3 group hover:bg-slate-400 transition-colors duration-500 rounded-lg"
    >
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-3">
          <input
            type="radio"
            name={serialNumber}
            className="radio checked:bg-blue-500"
            ref={detailsRef}
          />
          <span className="group-hover:text-white label-text">{option}</span>
        </label>
      </div>
      <ToastContainer />
    </div>
  );
};

export default QuizOptions;
