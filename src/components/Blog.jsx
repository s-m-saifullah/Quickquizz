import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mb-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-10">
        Blog
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-base-300 w-5 whitespace-normal"></th>
              <th className="bg-base-300 text-center text-base md:text-xl whitespace-normal">
                Question and Answer
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="bg-base-200 align-top whitespace-normal">1</th>
              <td className="bg-base-200 whitespace-normal">
                <p className="mb-3">
                  <strong>
                    Question: What is the purpose of react router?
                  </strong>
                </p>
                <p className="mb-3">
                  <strong>Answer: </strong> <u>Purposes of React Router</u>{" "}
                </p>
                <ul className="list-disc">
                  <li className="mb-3">
                    Routing between components is rapid as the amount of data
                    that renders is less. The rest of the data is rendered by
                    the DOM, and even when there's tons of HTML and CSS to
                    render, the DOM handles that part in the blink of an eye.
                    Using lazy loading, any delay in rendering HTML is
                    compensated for.
                  </li>
                  <li className="mb-3">
                    For better UX, animations and transitions can be easily
                    implemented when switching between different components.
                  </li>
                  <li>
                    It gives a real sense of a single-page application in
                    action. No separate pages are rendered, and the current page
                    doesn't refresh to load a new view.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th className="bg-base-300 align-top whitespace-normal">2</th>
              <td className="bg-base-300 whitespace-normal">
                <p className="mb-3">
                  <strong>Question: How does context api work?</strong>
                </p>
                <p className="mb-3">
                  <strong>Answer: </strong> React Context API provides a way to
                  pass data through the component tree without having to drill
                  the props down manually at every level. In some sense, it
                  simulates “Global” data in React component Tree.
                </p>
                <p>
                  React.createContext() is all we need. It returns a consumer
                  and a provider. Provider is a component that as it's names
                  suggests provides the state to its children. It will hold the
                  "store" and be the parent of all the components that might
                  need that store. Consumer as it so happens is a component that
                  consumes and uses the state.
                </p>
              </td>
            </tr>
            <tr>
              <th className="bg-base-200 align-top whitespace-normal">3</th>
              <td className="bg-base-200 whitespace-normal">
                <p className="mb-3">
                  <strong>Question: What is useRef hook?</strong>
                </p>
                <p className="mb-3">
                  <strong>Answer: </strong> React useRef hook can be helpful
                  when we need to create mutable variables in our components
                  without causing these components to re-render. For example,
                  store references to elements or some other values.
                </p>
                <p className="mb-3">
                  The useRef hook may not be as popular as other hooks such as
                  <u>useState</u> and <u>useEffect</u>. Nonetheless, useRef hook
                  can be very useful in certain situations. The ref, in useRef,
                  is means “reference”.
                </p>
                <p>
                  What this hook does is it allows us to store data, and persist
                  them across renders. What's even more interesting and
                  important, this hook does this without causing the component
                  to re-render. This means that when we update the value stored
                  by useRef, React will not re-render our component.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
