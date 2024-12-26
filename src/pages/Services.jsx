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
      <h2 className="text-center text-5xl font-bold">
        All Service: {data.length}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {data?.map((service) => (
          <div >
            <div className="card bg-base-100 shadow-xl">
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
                  <div className="badge badge-secondary">
                  <span className="hidden md:block">Price :</span>$ {service.servicePrice}
                  </div>
                </h2>
                <p>{service.description.substring(0, 100)}</p>
                <div className="flex gap-5 justify-center items-center">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                      <img src={service.photoURL} />
                    </div>
                  </div>
                  <p className="font-semibold">
                    Service Provider:{" "}
                    <span className="badge badge-secondary">
                      {service.displayName}
                    </span>
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/servicesDetails/${service._id}`}>
                    <motion.button
                      className=" btn btn-primary"
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
    </div>
  );
};

export default Services;
