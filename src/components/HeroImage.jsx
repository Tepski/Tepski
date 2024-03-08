import React from "react";
import { FaArrowCircleRight, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "../assets/image7.png";

const ArrowIcon = (
  <FaArrowCircleRight className="sm:text-[10px] lg:text-lg s2xl:text-3xl text-background xl:text-xl hover:text-accent hover:cursor-pointer active:opacity-70" />
);

function HeroImage() {
  const IconList = [
    {
      icon: <FaPhone className="text-background" />,
      content: "+639 991 403 4706",
      arrow: ArrowIcon,
    },
    {
      icon: <FaEnvelope className="text-background" />,
      content: "ladrillonojosephrussel@gmail.com",
      arrow: (
        <a href={`mailto:${"ladrillonojosephrussel@gmail.com"}`}>{ArrowIcon}</a>
      ),
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
              className="flex flex-row justify-between bg-secondary px-2 py-1 my-2 items-center border-s-8 border-accent"
            >
              <div className="sm:text-[10px] lg:text-lg xl:text-xl s2xl:text-3xl">
                {item.icon}
              </div>
              <p className="px-2 text-background sm:text-xs lg:text-base xl:text-lg s2xl:text-3xl font-extralight">
                {item.content}
              </p>
              {item.arrow}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroImage;
