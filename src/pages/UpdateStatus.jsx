import React from "react";

const UpdateStatus = ({ service, index }) => {
  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{service.serviceName}</td>
        <td>$ {service.servicePrice}</td>
        <td>{service.serviceArea}</td>
        <td className="flex items-center justify-center space-x-5">
         
        </td>
      </tr>
    </div>
  );
};

export default UpdateStatus;
