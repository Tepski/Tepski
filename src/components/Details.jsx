import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

function Details() {
  const [selectedColor, setSelectedColor] = useState("rgb(255, 255, 255)");

  const RandomColorSelector = () => {
    const randomNumber = Math.floor(Math.random() * 255);
    return randomNumber;
  };

  useEffect(() => {
    setInterval(() => {
      const colorText = `rgb(${RandomColorSelector()}, ${RandomColorSelector()}, ${RandomColorSelector()})`;
      setSelectedColor(colorText);
    }, 800);
  }, []);

  return (
    <div className="w-1/2 flex justify-center items-center flex-col relative">
      <div className="w-full h-[75%] py-20 ps-20 text-4xl font-extrabold text-white flex justify-center items-center flex-col z-10">
        <div>
          <div className="py-3 lg:text-3xl xl:text-5xl sm:text-lg md:text-xl">
            <p>
              HI<span className="text-primary">!</span> I am
            </p>
            <p className="">
              ENGR.
              <span
                style={{ color: selectedColor, textDecoration: "underline" }}
              >
                JOSEPH RUSSEL
              </span>
            </p>
          </div>
          <div className="lg:text-sm xl:text-xl sm:text-xs">
            <p className="italic text-white opacity-70">Mechanical Engineer</p>
            <p className="italic text-white opacity-70">Developer</p>
            <div className="sm:my-3 md:my-5 xl:my-10 flex flex-row items-center xl:text-xl lg:text-base sm:text-xs md:text-xs 2xl:text-5xl">
              <p className="bg-primary xl:p-2 sm:p-2 mr-5 cursor-pointer active:opacity-70">
                HIRE ME
              </p>
              <p className="hover:cursor-pointer active:opacity-70">Resumé</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-secondary h-[25%] self-end p-10 xl:px-20 sm:px-14 flex-row flex justify-between items-center">
        <div className="lg:text-lg sm:text-xs xl:text-xl 2xl:text-4xl">
          <p className="text-white font-semibold">TepDev</p>
          <p className="text-white font-semibold">Services</p>
          <p className="sm:my-1 my-4 text-white xl:text-sm sm:text-[8px] opacity-40 cursor-pointer active:opacity-30">
            VISIT US
          </p>
        </div>
        <div className="flex flex-row justify-around lg:text-3xl xl:text-4xl">
          <FaFacebook className="hover:cursor-pointer text-black hover:text-accent active:opacity-70 xl:mx-3 md:mx-2 sm:ms-1" />
          <FaTwitter className="hover:cursor-pointer text-black hover:text-accent active:opacity-70 xl:mx-3 md:mx-2 sm:ms-1" />
          <FaGithub className="hover:cursor-pointer text-black hover:text-accent active:opacity-70 xl:mx-3 md:mx-2 sm:ms-1" />
        </div>
      </div>
    </div>
  );
}

export default Details;
