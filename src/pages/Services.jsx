import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet";

const Services = () => {
  const data = useLoaderData();
  const {
    serviceName,
    serviceArea,
    serviceImage,
    servicePrice,
    description,
    displayName,
    photoURL,
  } = data;
  return (
    <div className="my-16">
      <Helmet>
        <title>LAW || manage your services</title>
        <meta name="description" content="Learn more about us!" />
      </Helmet>
      <h2 className="text-center text-5xl font-semibold my-10">
        All Service: {data.length}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {data?.map((service) => (

          <div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={() => { }}
                  onHoverEnd={() => { }}
                  src={service?.serviceImage}
                  alt="Service Image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-cyan-600">
                  {service.serviceName}
                  <div className="badge bg-teal-500">
                    <span className="hidden md:block text-white">Price :</span>$
                    {service.servicePrice}
                  </div>
                </h2>
                <p className="text-gray-600">{service.description.substring(0, 100)}</p>
                <div className="flex gap-5 justify-center items-center">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-teal-500">
                      <img src={service.photoURL} alt="Provider" />
                    </div>
                  </div>
                  <p className="font-semibold text-gray-600">
                    Service Provider:{" "}
                    <span className="badge bg-cyan-500 text-white">
                      {service.displayName}
                    </span>
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/servicesDetails/${service._id}`}>
                    <motion.button
                      className="btn bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      whileHover={{ scale: 1.2 }}
                      onHoverStart={() => { }}
                      onHoverEnd={() => { }}
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
    </div>
  );
};

export default Services;
