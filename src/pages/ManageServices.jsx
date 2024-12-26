import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { data, Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const ManageServices = () => {
  const [services, setServices] = useState();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://server-rho-liart-69.vercel.app/my-services?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => toast.error(err.message));
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-rho-liart-69.vercel.app/my-purchase/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Service has been deleted.",
              icon: "success",
            });
            const recaning = services?.filter((ser) => ser._id !== _id);
            setServices(recaning);
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="">
        {services?.length === 0 ? (
          <div>
            <h1 className="text-center text-5xl font-bold ">
              No Service Found <span className="text-red-600 font-bold">!</span>{" "}
            </h1>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-semibold text-center">
              Manage Your Services:{" "}
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
                    <td className="flex items-center justify-center space-x-5">
                      <Link to={`/updateServices/${service._id}`}>
                        {" "}
                        <button className="btn btn-success text-white font-bold text-2xl">
                          <CiEdit />
                        </button>
                      </Link>
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
  );
};

export default ManageServices;
