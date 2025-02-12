import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddAService = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName, photoURL } = user;
  const serviceEmail = {email}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      description,
      serviceArea,
      serviceImage,
      serviceName,
      servicePrice,
    } = data;
    const service = {
      serviceEmail,
      serviceName,
      serviceArea,
      serviceImage,
      servicePrice,
      description,
      displayName,
      photoURL,
    };
    fetch(`https://server-rho-liart-69.vercel.app/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your Services Add Successful");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
       <Helmet>
        <title>LAW || Add your services</title>
        <meta name="description" content="Learn more about us!" />
      </Helmet>
      <div className="w-2/4 mx-auto space-y-7 my-14 bg-white shadow-lg p-7">
        <h1 className="text-center text-3xl font-bold">Add services page</h1>
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
            {...register("serviceImage", { required: true })}
            aria-invalid={errors.serviceImage ? "true" : "false"}
          />
          {errors.serviceImage?.type === "required" && (
            <p className="text-red-600 text-xs" role="alert">
              Service Image Url is Required
            </p>
          )}
          <label htmlFor="serviceName" className="text-xl text-black">
            Service Name
          </label>
          <input
            className="border rounded-md p-2"
            type="text"
            placeholder="Service Name"
            {...register("serviceName", { required: true })}
            aria-invalid={errors.serviceName ? "true" : "false"}
          />
          {errors.serviceName?.type === "required" && (
            <p className="text-red-600 text-xs" role="alert">
              Service name is Required
            </p>
          )}
          <label htmlFor="serviceImage" className="text-xl text-black">
            Service Price
          </label>
          <input
            className="border rounded-md p-2"
            type="number"
            placeholder="Service Price"
            {...register("servicePrice", { required: true })}
            aria-invalid={errors.servicePrice ? "true" : "false"}
          />
          {errors.servicePrice?.type === "required" && (
            <p className="text-red-600 text-xs" role="alert">
              Service price is Required
            </p>
          )}
          <label htmlFor="serviceArea" className="text-xl text-black">
            Service Area
          </label>
          <input
            className="border rounded-md p-2"
            type="text"
            placeholder="Service Area"
            {...register("serviceArea", { required: true })}
            aria-invalid={errors.serviceArea ? "true" : "false"}
          />
          {errors.serviceArea?.type === "required" && (
            <p className="text-red-600 text-xs" role="alert">
              Service Area is Required
            </p>
          )}
          <label htmlFor="description" className="text-xl text-black">
            Description
          </label>
          <textarea
            className="border rounded-md p-2"
            placeholder="Description"
            {...register("description", { required: true })}
            aria-invalid={errors.description ? "true" : "false"}
          />
          {errors.description?.type === "required" && (
            <p className="text-red-600 text-xs" role="alert">
              Description is Required
            </p>
          )}
          <input
            className="btn bg-gradient-to-r from-[#9a9a7d] to-[#94aca7] text-2xl text-white"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAService;
