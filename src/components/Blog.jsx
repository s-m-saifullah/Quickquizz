import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-10">
        Blog
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-slate-500 w-5"></th>
              <th className="bg-slate-500 text-center text-base md:text-xl">
                Question and Answer
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="bg-slate-900">1</th>
              <td className="bg-slate-900">
                <strong>Question: What is the purpose of react router?</strong>
                <br />
                <strong>Answer: </strong>
              </td>
            </tr>
            <tr>
              <th className="bg-slate-800">2</th>
              <td className="bg-slate-800">
                <strong>Question: How does context api work?</strong>
                <br />
                <strong>Answer: </strong>
              </td>
            </tr>
            <tr>
              <th className="bg-slate-900">3</th>
              <td className="bg-slate-900">
                <strong>Question: What is useRef hook?</strong>
                <br />
                <strong>Answer: </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
