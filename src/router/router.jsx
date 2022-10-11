import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quizzes from "../components/Quizzes";
import Statistics from "../components/Statistics";
import Main from "../layout/Main";
import { topicLoader } from "../loaders/topicLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: topicLoader,
        element: <Home />,
      },
      {
        path: "/home",
        loader: topicLoader,
        element: <Home />,
      },
      {
        path: "/quiz/:quizId",
        loader: async ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          ),
        element: <Quizzes />,
      },
      {
        path: "/statistics",
        loader: topicLoader,
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
