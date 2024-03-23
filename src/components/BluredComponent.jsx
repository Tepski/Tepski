import React from "react";
import { FaCircle } from "react-icons/fa";

const BluredComponent = ({ text }) => {
  return (
    <div className="relative max-w-[50%]">
      <div className="absolute h-full w-full top-0 left-0 bg-black/60 rounded-3xl blur-sm z-0" />
      <div className="flex w-full h-full 2xl:p-8 sm:p-5 flex-col sm:text-xs 2xl:text-2xl">
        <div className="flex gap-2">
          <FaCircle className="text-primary " />
          <FaCircle className="text-yellow-300 " />
          <FaCircle className="text-lime-300 " />
        </div>
        <p className="text-secondary z-10">{text}</p>
      </div>
    </div>
  );
};

export default BluredComponent;
