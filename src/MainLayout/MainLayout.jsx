import React from "react";
import NavBar from "../Compontents/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Compontents/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="w-11/12 mx-auto">
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
