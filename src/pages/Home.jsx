import React from "react";
import NavBar from "../Compontents/NavBar";
import { Outlet } from "react-router-dom";
import Feature from "../Compontents/Feature";
import Slider from "../Compontents/Slider";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Feature></Feature>
    </div>
  );
};

export default Home;
