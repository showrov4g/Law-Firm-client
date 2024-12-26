import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateServices = () => {
  const loaderData = useLoaderData();
  const {_id}= loaderData
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
   const {serviceName} = data
   const services = {serviceName}

    fetch(`https://server-rho-liart-69.vercel.app/services/${_id}`,{
      method: "PUT",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(services)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  };

  return (
    <div className="w-2/4 mx-auto space-y-7 bg-white shadow-lg p-7">
      <h1 className="text-center text-3xl font-bold">
        Update : 
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <label htmlFor="serviceImage" className="text-xl text-black">
          Service Image URL
        </label>
        <input
          className="border rounded-md p-2"
          type="url"
          placeholder="Service Image URL"
          {...register("serviceImage", { required: false })}
        />
        <label htmlFor="serviceName" className="text-xl text-black">
          Service Name
        </label>
        <input
          className="border rounded-md p-2"
          type="text"
          placeholder="Service Name"
          {...register("serviceName", { required: false })}
        />
        <label htmlFor="serviceImage" className="text-xl text-black">
          Service Price
        </label>
        <input
          className="border rounded-md p-2"
          type="number"
          placeholder="Service Price"
          {...register("servicePrice", { required: false })}
        />
        <label htmlFor="serviceArea" className="text-xl text-black">
          Service Area
        </label>
        <input
          className="border rounded-md p-2"
          type="text"
          placeholder="Service Area"
          {...register("serviceArea", { required: false })}
        />
        <label htmlFor="description" className="text-xl text-black">
          Description
        </label>
        <textarea
          className="border rounded-md p-2"
          placeholder="Description"
          {...register("description", { required: false })}
        />
        <input
          className="btn bg-gradient-to-r from-[#5756CD] to-[#B850C1] text-2xl text-white"
          type="submit"
        />
      </form>
    </div>
  );
};

export default UpdateServices;
