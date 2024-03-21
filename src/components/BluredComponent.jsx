import React from "react";
import { FaCircle } from "react-icons/fa";

const BluredComponent = ({ text }) => {
  return (
    <div className="relative max-w-xl">
      <div className="absolute h-full w-full top-0 left-0 bg-black/60 rounded-3xl blur-sm" />
      <div className="flex w-full h-full p-8 flex-col text-2xl">
        <div className="flex gap-2">
          <FaCircle className="text-primary " />
          <FaCircle className="text-yellow-300 " />
          <FaCircle className="text-lime-300 " />
        </div>
        <p className="text-text">{text}</p>
      </div>
    </div>
  );
};

export default BluredComponent;
