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
              <th className="w-5"></th>
              <th className="text-center text-base md:text-xl">
                Question and Answer
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
