import { ThemeProvider } from "@mui/material/styles";
import useUserStore from "./store/storeUsers";
import useMuiTheme from "./hooks/useMuiTheme";

import RootLayout from "./layouts/RootLayout";
import ErrorLayout from "./layouts/ErrorLayout";
import ProfileLayout from "./layouts/ProfileLayout";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProfileEdit from "./pages/ProfileEdit";
import Favorites from "./pages/Favorites";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  const isDarkMode = useUserStore((state) => state.isDarkMode);
  const { theme } = useMuiTheme(isDarkMode ? "dark" : "light");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "movies/:id",
          element: <Movie />,
        },
        {
          path: "profile",
          element: <ProfileLayout />,
          children: [
            {
              path: ":id",
              element: <Profile />,
            },
            {
              path: "edit",
              element: <ProfileEdit />,
            },
            {
              path: "favorites",
              element: <Favorites />,
            },
          ],
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

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
