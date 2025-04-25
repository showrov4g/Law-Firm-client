import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddAService = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName, photoURL } = user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { description, serviceArea, serviceImage, serviceName, servicePrice } = data;
    const service = {
      serviceEmail: email,
      serviceName,
      serviceArea,
      serviceImage,
      servicePrice,
      description,
      displayName,
      photoURL,
    };

    fetch("https://server-rho-liart-69.vercel.app/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then(() => toast.success("Your Service has been added successfully!"))
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <Helmet>
        <title>LAW || Add your services</title>
        <meta name="description" content="Add new legal services" />
      </Helmet>

      <div className="w-full max-w-2xl mx-auto space-y-7 my-14 bg-white shadow-2xl p-10 rounded-2xl border border-gray-200">
        <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-4">Add New Service</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">

          {/* Service Image URL */}
          <label className="text-lg font-semibold text-gray-700">Service Image URL</label>
          <input
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            type="url"
            placeholder="Enter service image URL"
            {...register("serviceImage", { required: "Service Image URL is required" })}
          />
          {errors.serviceImage && <p className="text-red-600 text-sm">{errors.serviceImage.message}</p>}

          {/* Service Name */}
          <label className="text-lg font-semibold text-gray-700">Service Name</label>
          <input
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            type="text"
            placeholder="Enter service name"
            {...register("serviceName", { required: "Service Name is required" })}
          />
          {errors.serviceName && <p className="text-red-600 text-sm">{errors.serviceName.message}</p>}

          {/* Service Price */}
          <label className="text-lg font-semibold text-gray-700">Service Price</label>
          <input
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            type="number"
            placeholder="Enter service price"
            {...register("servicePrice", { required: "Service Price is required" })}
          />
          {errors.servicePrice && <p className="text-red-600 text-sm">{errors.servicePrice.message}</p>}

          {/* Service Area */}
          <label className="text-lg font-semibold text-gray-700">Service Area</label>
          <input
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            type="text"
            placeholder="Enter service area"
            {...register("serviceArea", { required: "Service Area is required" })}
          />
          {errors.serviceArea && <p className="text-red-600 text-sm">{errors.serviceArea.message}</p>}

          {/* Description */}
          <label className="text-lg font-semibold text-gray-700">Description</label>
          <textarea
            className="border border-gray-300 rounded-lg p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            placeholder="Write a short description"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}

          {/* Submit Button */}
          <input
            className="cursor-pointer bg-gradient-to-r from-teal-500 to-indigo-500 text-white text-xl font-semibold py-3 rounded-lg hover:from-teal-600 hover:to-indigo-600 transition-all duration-300"
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAService;
