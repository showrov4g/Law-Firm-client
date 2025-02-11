import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Feature = () => {
  const [services, setServices] = useState();
  //   const {serviceName, serviceArea, serviceImage, servicePrice, description, displayName, photoURL}= services

  useEffect(() => {
    fetch(`https://server-rho-liart-69.vercel.app/allServices?limit=6`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <div className="z-10">
      <div className=" flex flex-col items-center justify-center">
        <h1 className=" text-3xl font-bold">Popular Services</h1>
        <hr className="w-36 h-1 my-3 bg-green-600 overflow-hidden" />
      </div>
      <div className="grid md:grid-cols-3 gap-6 my-7">
        {services?.map((service) => (
          <div>
            <div layoutId="item" className="card bg-base-100 shadow-xl">
              <figure>
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(event) => {}}
                  onHoverEnd={(event) => {}}
                  src={service.serviceImage}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {service.serviceName}
                  <div className="badge bg-[#94aca7] text-[#fbfbf9]">
                    <span className="hidden md:block">Price :</span>$ {service.servicePrice}
                  </div>
                </h2>
                <p>{service.description.substring(0, 100)}</p>
                <div className="flex gap-5 justify-center items-center">
                  <div className="avatar">
                    <div className="  w-10 rounded-full ring ring-[#9a9a7d]">
                      <img src={service.photoURL} />
                    </div>
                  </div>
                  <p className="font-semibold">
                    Service Provider:{" "}
                    <span className="badge bg-[#94aca7] text-[#fbfbf9]">
                      {service.displayName}
                    </span>
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/servicesDetails/${service._id}`}>
                    {" "}
                    <motion.button
                      className=" btn bg-[#9a9a7d]"
                      whileHover={{ scale: 1.2 }}
                      onHoverStart={(event) => {}}
                      onHoverEnd={(event) => {}}
                    >
                      Views Details
                    </motion.button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex item-center justify-center my-6">
        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(event) => {}}
            onHoverEnd={(event) => {}}
            className="btn bg-[#9a9a7d]"
          >
            View All
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Feature;
