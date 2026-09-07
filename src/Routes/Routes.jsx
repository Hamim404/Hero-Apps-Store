import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AppDetails from "../Pages/AppDetails/AppDetails";
import AllApps from "../Pages/AllApps/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appsData.json"),
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch("/appsData.json"),
        Component: AllApps,
      },
      {
        path: "installation",
        element: <h1>Installation</h1>,
      },
      {
        path: "AppDetails/:id",
        loader: () => fetch("/appsData.json"),
        Component: AppDetails,
      },
    ],
  },
]);
