import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="flex flex-col justify-center items-center my-16">
          <Helmet>
        <title>Nothing here</title>
        <meta name="description" content="Learn more about us!" />
      </Helmet>
      <div>
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01BBE7] via-[#000] to-[#8D27DA]">404 !</h1>
      </div>
      <Link to="/">
        <button className="btn btn-error">Go to Home</button>
      </Link>
    </div>
  );
};

export default ErrorElement;
