import React from "react";
import { useLoaderData } from "react-router-dom";

const Services = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-5xl font-bold">
        All Service: {data.length}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {data?.map((service) => (
          <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
