import React from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Image from "../assets/image7.png";

function HeroImage() {
  return (
    <div className="w-1/2 flex relative">
      {/* <div className="absolute z-0 h-full w-full bg-primary opacity-25" /> */}
      <div className="flex w-full justify-center z-10">
        <img src={Image} height={"80%"} alt="" />
      </div>
      <div className="absolute bottom-0 px-5 w-full h-[25%] flex justify-center items-end flex-col z-20 text-2xl">
        <div className="bg-background h-10 my-2 items-center px-2 py-2 flex justify-between border-b-4 border-accent">
          <FaPhone color="#313706" className="" />
          <p className="text-white px-4 py-4">+63 991-403-4706</p>
          <FaArrowCircleRight className="text-secondary active:text-accent hover:cursor-pointer" />
        </div>
        <div className="bg-background h-10 my-2 items-center px-2 py-2 flex justify-between border-b-4 border-accent">
          <FaEnvelope color={"#313706"} className="" />
          <p className="text-white px-4 py-4">
            ladrillonojosephrussel@gmail.com
          </p>
          <FaArrowCircleRight className="text-secondary active:text-accent hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
