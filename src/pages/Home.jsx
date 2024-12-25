import React from "react";
import NavBar from "../Compontents/NavBar";
import { Outlet } from "react-router-dom";
import Feature from "../Compontents/Feature";
import Slider from "../Compontents/Slider";
import Solution from "../Compontents/Solution";
import Faq from "../Compontents/Faq";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Feature></Feature>
      {/* our best solution section  */}
      <Solution></Solution>
      <Faq></Faq>
    </div>
  );
};

export default Home;
