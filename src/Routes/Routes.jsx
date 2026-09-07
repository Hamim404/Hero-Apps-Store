import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "apps",
        element: <h1>Apps</h1>,
      },
      {
        path: "installation",
        element: <h1>Installation</h1>,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
