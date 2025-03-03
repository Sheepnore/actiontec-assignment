import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthProvider } from "./auth/AuthContext.jsx";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import App from "./App.jsx";
import MainPage from "./ui/MainPage/MainPage.jsx";
import Posts from "./ui/Posts/Posts.jsx";
import PostDetails from "./ui/Posts/PostDetails.jsx";

import "./index.css";
// React router setting
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mainPage",
    element: <MainPage />,
    children: [
      {
        path: "/mainPage",
        element: <Posts />,
      },
      {
        path: "/mainPage/:postId",
        element: <PostDetails />,
      },
    ],
  },
]);

// create MUI custome theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#009580",
    },
    danger: {
      main: "#D10000",
      contrastText: "#fff",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
