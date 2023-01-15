import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import UserEdit from "./pages/UserEdit";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FavoritsPage from "./pages/FavoritsPage";
import UserProfile from "./pages/UserProfile";
import { createTheme, ThemeProvider } from "@mui/material";

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
        path: "user",
        element: <User />,
      },
      {
        path: "profile/:id",
        element: <UserProfile />,
      },
      {
        path: "user/edit",
        element: <UserEdit />,
      },
      {
        path: "favorits",
        element: <FavoritsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const theme = createTheme({
  palette: {
    primary: { main: "rgb(227, 171, 87)" },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
