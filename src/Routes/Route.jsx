import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MainLayout from "../MainLayout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddAService from "../pages/AddAService";

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
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "addAService",
        element: (
          <PrivateRoute>
            <AddAService></AddAService>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
