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
            <div layoutId="item" className="card bg-gray-100 shadow-xl rounded-lg overflow-hidden">
              <figure className="relative">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={service.serviceImage}
                  alt="Service Image"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body p-6">
                <h2 className="card-title text-2xl font-semibold text-gray-800 flex justify-between items-center">
                  {service.serviceName}
                  <div className="badge bg-teal-600 text-white px-3 py-1 rounded-lg text-sm">
                    <span className="hidden md:block">Price :</span> ${service.servicePrice}
                  </div>
                </h2>
                <p className="text-gray-600 mt-2">{service.description.substring(0, 100)}...</p>
                <div className="flex gap-5 justify-start items-center mt-4">
                  <div className="avatar">
                    <div className="w-10 h-10 rounded-full ring-2 ring-teal-400">
                      <img src={service.photoURL} className="w-full h-full rounded-full" />
                    </div>
                  </div>
                  <p className="font-semibold text-gray-700">
                    Service Provider:{" "}
                    <span className="badge bg-teal-500 text-white px-2 py-1 rounded-md">
                      {service.displayName}
                    </span>
                  </p>
                </div>
                <div className="card-actions mt-4 flex justify-end">
                  <Link to={`/servicesDetails/${service._id}`}>
                    <motion.button
                      className="btn bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      View Details
                    </motion.button>
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
            onHoverStart={(event) => { }}
            onHoverEnd={(event) => { }}
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
