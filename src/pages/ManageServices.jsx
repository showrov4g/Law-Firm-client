import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { data } from "react-router-dom";
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
            <h1 className="text-center text-5xl font-bold ">No Service Found <span className="text-red-600 font-bold">!</span> </h1>
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
                      <button className="btn btn-success text-white font-bold text-2xl">
                        <CiEdit />
                      </button>
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

      {/* <div className="grid grid-cols-4 gap-5 my-6">
        {services?.map((service) => (
          // <div className="md:flex justify-center items-center space-y-5 md:space-y-0 shadow-md hover:shadow-2xl p-3 py-6 md:py-0">
          //   <div className="flex-1 w-60 rounded-lg md:p-4">
          //     <img className=" rounded-lg w-full" src={service.serviceImage} alt="" />
          //   </div>
          //   <div className="flex-grow ">
          //     <h1 className="text-2xl">Service Name: {service.serviceName}</h1>
          //     <h4>Service Location: {service.serviceArea}</h4>
          //     <h4>Price: {service.servicePrice}</h4>
          //   </div>
          //   <div className="flex-1 ">
          //   <div className="flex lg:flex-col justify-center items-center gap-2">
          //       <button className="btn btn-primary">Edit</button>
          //       <button onClick={()=>handleDelete(service._id)}  className="btn btn-error">Delete</button>
          //   </div>
          //   </div>
          // </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={service.serviceImage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button onClick={()=>handleDelete(service._id)} className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ManageServices;
