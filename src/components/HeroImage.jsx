import React from "react";
import { FaArrowCircleRight, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "../assets/image7.png";

function HeroImage() {
  const IconList = [
    {
      icon: <FaEnvelope color={"#313706"} className="" />,
      content: "ladrillonojosephrussel@gmail.com",
    },
    {
      icon: <FaPhone color={"#323706"} className="" />,
      content: "+639 991 403 4706",
    },
  ];

  return (
    <div className="w-1/2 flex relative">
      {/* <div className="absolute z-0 h-full w-full bg-primary opacity-25" /> */}
      <div className="flex w-full justify-center z-10">
        <img src={Image} height={"80%"} alt="" />
      </div>
      <div className="absolute bottom-0 px-5 w-full h-[25%] flex justify-center items-end flex-col z-20">
        {IconList.map((item, index) => {
          return (
            <div
              key={index.toString()}
              className="flex flex-row justify-between bg-background px-2 py-1 my-2 items-center border-b-4 border-b-accent"
            >
              <div className="sm:text-[10px] lg:text-lg xl:text-xl">
                {item.icon}
              </div>
              <p className="px-2 text-white sm:text-xs lg:text-base xl:text-lg">
                {item.content}
              </p>
              <FaArrowCircleRight className="sm:text-[10px] lg:text-lg text-secondary xl:text-xl hover:text-accent hover:cursor-pointer active:opacity-70" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroImage;
