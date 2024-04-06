import React from "react";
import Prmsu from "../assets/PrmsuImage.jpg";

const Education = () => {
  return (
    <div className="w-full h-screen">
      <h2 className="text-center">EDUCATION</h2>
      <div className=" h-[400px] flex items-center">
        <div className="h-full w-2/3 ps-10 flex items-center">
          <p
            className="text-gray-600 text-4xl italic"
            style={{ writingMode: "sideways-lr" }}
          >
            2018 - 2023
          </p>
          <div className="flex justify-center flex-col items-center rounded-full px-4 bg-gray-600 h-full">
            <p>College Degree</p>
            <p className="text-3xl">
              PRESIDENT RAMON MAGSAYSAY STATE UNIVERSITY
            </p>
            <p>BS Mechanical Engineering</p>
          </div>
        </div>
        <div className="h-full w-1/3 rounded-s-full bg-black/40 overflow-hidden relative flex items-center">
          <img
            src={Prmsu}
            alt="University Photo"
            className="h-auto aspect-auto absolute opacity-70 hover:scale-150 hover:opacity-100 transition ease-in-out duration-1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
