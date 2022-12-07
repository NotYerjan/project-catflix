import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Liked from "./components/extratest/Liked";
import Search from "./components/extratest/Search";
import Users from "./components/extratest/Users";

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
        path: "users",
        element: <Users />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
