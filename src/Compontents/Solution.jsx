import React from "react";
import { GoLaw, GoRepoTemplate } from "react-icons/go";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { motion } from "motion/react";

const Solution = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-200 px-5 py-20 rounded-xl z-10">
      <h1 className="text-5xl font-bold text-[#B68C5A]">The Best Lawyer Solution</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(event) => {}}
          onHoverEnd={(event) => {}}
          className="bg-white shadow-xl p-4 rounded-lg overflow-hidden"
        >
          <p className="text-5xl inline-block bg-[#94aca7] p-3 rounded-lg text-white">
            <GoLaw />
          </p>
          <h1 className="text-2xl font-bold text-[#B68C5A]">Professional Advice</h1>
          <p className="text-[#4B5563]">
            Etiam justo vitae lacus hendrerit ornare sit amet in justo donec felis tempus augue.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(event) => {}}
          onHoverEnd={(event) => {}}
          className="bg-white shadow-lg p-4 rounded-lg"
        >
          <p className="text-5xl inline-block bg-[#94aca7] p-3 rounded-lg text-white">
            <GoRepoTemplate />
          </p>
          <h1 className="text-2xl font-bold text-[#B68C5A]">Employment Law</h1>
          <p className="text-[#4B5563]">
            Etiam justo vitae lacus hendrerit ornare sit amet in justo donec felis tempus augue.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(event) => {}}
          onHoverEnd={(event) => {}}
          className="bg-white shadow-lg p-4 rounded-lg"
        >
          <p className="text-5xl inline-block bg-[#94aca7] p-3 rounded-lg text-white">
            <FaCompressArrowsAlt />
          </p>
          <h1 className="text-2xl font-bold text-[#B68C5A]">Competitive Pricing</h1>
          <p className="text-[#4B5563]">
            Etiam justo vitae lacus hendrerit ornare sit amet in justo donec felis tempus augue.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(event) => {}}
          onHoverEnd={(event) => {}}
          className="bg-white shadow-lg p-4 rounded-lg"
        >
          <p className="text-5xl inline-block bg-[#94aca7] p-3 rounded-lg text-white">
            <MdCastForEducation />
          </p>
          <h1 className="text-2xl font-bold text-[#B68C5A]">Education Law</h1>
          <p className="text-[#4B5563]">
            Etiam justo vitae lacus hendrerit ornare sit amet in justo donec felis tempus augue.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Solution;
