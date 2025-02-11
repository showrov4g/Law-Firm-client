import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ServicesDetails = () => {
  const { user, setProviderEmail } = useContext(AuthContext);
  const data = useLoaderData();
  const {
    _id,
    email,
    serviceName,
    serviceArea,
    serviceImage,
    servicePrice,
    description,
    displayName,
    photoURL,
  } = data;
  const serviceProviderEmail = email;
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const instruction = form.instruction.value;
    const purchaseUserEmail = user?.email;
    const myPurchase = {
      serviceProviderEmail,
      date,
      instruction,
      serviceName,
      serviceArea,
      serviceImage,
      servicePrice,
      description,
      displayName,
      photoURL,
      purchaseUserEmail,
      serviceStatus: "pending",
    };
    fetch(`http://localhost:5000/purchase`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myPurchase),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" w-4/5 mx-auto my-16">
      <Helmet>
        <title>LAW || Service details </title>
        <meta name="description" content="Learn more about us!" />
      </Helmet>
      <h1 className="text-center text-4xl font-semibold my-10">
        {serviceName}
      </h1>

      {/* =================== */}
      <div className="flex gap-6">
        <div>
          <img
            className="w-11/12 mx-auto rounded-xl"
            src={serviceImage}
            alt=""
          />
        </div>
        <div>
          {/* -------------------- */}
          <div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl">Service Name: {serviceName}</h2>
              <p className="text-xl font-bold">
                Description:{" "}
                <span className="text-base font-thin">{description}</span>
              </p>
              <p className="badge badge-secondary">
                Service Price ${servicePrice}
              </p>
            </div>
            {/* service provider information */}
            <div>
              <h1>Service provider Information</h1>
              <div>
                <img className="rounded-lg w-32" src={photoURL} alt="" />
                <h4 className="font-bold text-lg">Name: {displayName}</h4>

                <h4 className="font-bold text-lg">Location: {serviceArea}</h4>
              </div>
            </div>
            <div className=" justify-end">
              <button
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="btn btn-primary"
              >
                Book Now
              </button>
            </div>
          </div>
          {/* -------------------- */}
        </div>
      </div>
      {/* ================== */}

      {/* <div className="card bg-base-100 w-10/12 p-4 mx-auto shadow-xl">
        <figure>
          <img className=" rounded-xl" src={serviceImage} alt="Shoes" />
        </figure>

        <div className="card-body">
          <div>
            <h2 className="card-title">Service Name: {serviceName}</h2>
            <p><span className="font-bold">Description:</span> {description}</p>
            <p className="badge badge-secondary">
              Service Price ${servicePrice}
            </p>
          </div>
          {/* service provider information */}
      {/* <div>
            <h1 className="font-bold text-xl">Service provider Information</h1>
            <div>
              <h4 className="font-bold text-lg">Name: {displayName}</h4>
              <img className="rounded-lg w-32" src={photoURL} alt="" />
              <h4 className="font-bold text-lg">Location: {serviceArea}</h4>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="btn btn-primary"
            >
              Book Now
            </button>
          </div>
        </div>
      </div> */}
      {/* model  */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div>
            <div className="my-2">
              <img
                className="w-60 mx-auto p-2 border rounded-2xl"
                src={serviceImage}
                alt=""
              />
            </div>
            <h4 className="border p-3">Service Id: {_id}</h4>
            <h4 className="border p-3">Service Name: {serviceName}</h4>
            <h4 className="border p-3">Service Provider Email:{email}</h4>
            <h4 className="border p-3">Service Provider name: {displayName}</h4>
            <h4 className="border p-3">Price: ${servicePrice}</h4>
            <h4 className="border p-3">Your Email: {user?.email}</h4>
            <h4 className="border p-3">Your Name: {user?.displayName}</h4>
            <div>
              <form onSubmit={handleBooking} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Taking Date</span>
                  </label>
                  <input
                    name="date"
                    type="date"
                    placeholder="Date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Special instruction</span>
                  </label>
                  <textarea
                    className="border"
                    name="instruction"
                    placeholder="address , area, customized service plan"
                    id=""
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Purchase</button>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServicesDetails;
