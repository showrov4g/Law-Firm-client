import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ServiceTOdo = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState();
  useEffect(() => {
    fetch(
      `https://server-rho-liart-69.vercel.app/service-to-do?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => toast.error(err.message));
  }, []);

  const handleStatusChange = (e) => {
    const statusValue = e.target.value;
    {
      services.map((service) =>
        fetch(
          `https://server-rho-liart-69.vercel.app/service-to-do/${service?._id}`,
          {
            method: "PUT",
            headers:{
              "content-type": "application/json"
            },
            body: JSON.stringify(statusValue)
          }
        )
          .then((res) => res.json())
          .then((data) => toast.success("Work done"))
          .catch((err) => toast.error(err))
      );
    }

  };

  return (
    <div>
      <div className="my-16">
        <Helmet>
          <title>LAW || Your Booked Services</title>
          <meta name="description" content="Learn more about us!" />
        </Helmet>

        {/* table for booked item  */}
        <div className="">
          {services?.length === 0 ? (
            <div>
              <h1 className="text-center text-5xl font-bold ">
                No Service Found{" "}
                <span className="text-red-600 font-bold">!</span>{" "}
              </h1>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-semibold text-center">
                Your Book services::{" "}
                <span className="text-green-600">{services?.length}</span>
              </h1>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Services Name</th>
                    <th>Price</th>
                    <th>Service Area</th>
                    <th>Service Status</th>
                    <th>Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {services?.map((service, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{service.serviceName}</td>
                      <td>$ {service.servicePrice}</td>
                      <td>{service.serviceArea}</td>
                      <td>
                        <select
                          value={service.serviceStatus}
                          onChange={handleStatusChange}
                        >
                          <option value="pending">Pending</option>
                          <option value="working">Working</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                      <td className="flex items-center justify-center space-x-5">
               
                        <button
                          onClick={() => handleDelete(service._id)}
                          className="btn btn-error"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
  
    </div>
  );
};

export default ServiceTOdo;
