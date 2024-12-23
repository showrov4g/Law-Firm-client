import React, { Children, useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Vortex } from 'react-loader-spinner'
import Loading from "../pages/Loading";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>
    ;
  }
  if(user){
    return children;
  }
  
    return <Navigate to="/login" state={location?.pathname}></Navigate>
  
  
};

export default PrivateRoute;
