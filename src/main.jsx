import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Liked from "./components/extratest/Liked";
import Search from "./components/extratest/Search";
import User from "./pages/User";
import UserEdit from "./pages/UserEdit";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "movies",
        element: <Home />,
      },
      {
        path: "movies/:id",
        element: <Movie />,
      },
      {
        path: "liked",
        element: <Liked />,
      },
      {

        path: "user",
        element: <User />,
      },
      {
        path: "user/edit",
        element: <UserEdit />,
      },
      {
        path: "search",
        element: <Search />,
         },
      {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
     
    ],
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
