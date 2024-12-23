import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const ManageServices = () => {
  const [services, setServices] = useState();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://server-rho-liart-69.vercel.app/services?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => toast.error(err.message));
  }, [user?.email]);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-semibold text-center">
        Manage Your Services:{" "}
        <span className="text-green-600">{services?.length}</span>
      </h1>
      <div className="md:flex flex-col gap-10">
        {services?.map((service) => (
          <div className="md:flex justify-center items-center space-y-5 md:space-y-0 shadow-md hover:shadow-2xl p-3 py-6 md:py-0">
            <div className="flex-1 rounded-lg md:p-4">
              <img className=" rounded-lg" src={service.serviceImage} alt="" />
            </div>
            <div className="flex-grow">
              <h1 className="text-2xl">Service Name: {service.serviceName}</h1>
              <h4>Service Location: {service.serviceArea}</h4>
              <h4>Price: {service.servicePrice}</h4>
            </div>
            <div className="flex-1 ">
            <div className="flex lg:flex-col justify-center items-center gap-2">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-error">Delete</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
