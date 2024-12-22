import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MainLayout from "../MainLayout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: "login",
        element: <Login></Login>
      }
    ],
  },
]);

export default router;
