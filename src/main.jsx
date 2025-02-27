import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthProvider } from "./auth/AuthContext.jsx";
import App from "./App.jsx";
import MainPage from "./ui/MainPage/MainPage.jsx";
import Posts from "./ui/Posts/Posts.jsx";
import PostDetails from "./ui/Posts/PostDetails.jsx";

import "./index.css";

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>
);
