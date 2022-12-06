import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "movies",
				element: <Home />,
			},
			{
				path: "movies/:id",
				element: <Movie />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
