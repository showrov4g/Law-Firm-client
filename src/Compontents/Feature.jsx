import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

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
    <div>
      <h1 className="text-center text-3xl font-bold">Popular Services</h1>
      <div className="grid grid-cols-2 gap-6">
        {services?.map((service) => (
          <div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={service.serviceImage} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {service.serviceName}
                  <div className="badge badge-secondary">
                    Price:$ {service.servicePrice}
                  </div>
                </h2>
                <p>{service.description.substring(0, 100)}</p>
                <div className="flex gap-5 justify-center items-center">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                      <img src={service.photoURL} />
                    </div>
                  </div>
                  <p className="font-semibold">Service Provider: <span className="badge badge-secondary">{service.displayName}</span></p>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/servicesDetails/${service._id}`} className=" btn badge badge-outline">Views Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
