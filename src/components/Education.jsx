import React from "react";
import Prmsu from "../assets/PrmsuImage.jpg";

const Education = () => {
  return (
    <div className="w-full h-screen ">
      <h2 className="text-center">EDUCATION</h2>
      <div className="bg-primary/40 h-[400px] flex items-center">
        <div className="h-full w-2/3"></div>
        <div className="h-full w-1/3 rounded-s-full bg-black/40 overflow-hidden relative flex items-center">
          <img
            src={Prmsu}
            alt="University Photo"
            className="h-[800px] aspect-auto absolute -top-60 opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
