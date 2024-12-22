import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MainLayout from "../MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Services",
        element: <Services></Services>,
      },
    ],
  },
]);

export default router;
