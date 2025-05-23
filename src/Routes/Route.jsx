import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MainLayout from "../MainLayout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddAService from "../pages/AddAService";
import ManageServices from "../pages/ManageServices";
import ServicesDetails from "../pages/ServicesDetails";
import BookServices from "../pages/BookServices";
import ErrorElement from "../pages/ErrorElement";
import UpdateServices from "../pages/UpdateServices";
import ServiceTOdo from "../pages/ServiceTOdo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
        loader: ()=> fetch(`https://server-rho-liart-69.vercel.app/allServices`)
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
        )
      },
      {
        path: 'manageService',
        element: <PrivateRoute>
          <ManageServices></ManageServices>
        </PrivateRoute>
      },
      {
        path:"servicesDetails/:id",
        element:<PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
        loader: ({params})=>fetch(`https://server-rho-liart-69.vercel.app/services/${params.id}`)
      },
      {
        path:"/bookServices",
        element: <PrivateRoute><BookServices></BookServices></PrivateRoute>
      },
      {
        path: 'updateServices/:id',
        element:<PrivateRoute><UpdateServices></UpdateServices></PrivateRoute>,
        loader: ({params})=>fetch(`https://server-rho-liart-69.vercel.app/services/${params.id}`)
       
      },
      {
        path: 'serviceToDo',
        element: <PrivateRoute><ServiceTOdo></ServiceTOdo></PrivateRoute>,
      }
    ],
  },
]);

export default router;
