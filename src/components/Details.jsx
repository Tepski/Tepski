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
      <div className="w-full h-[75%] py-20 ps-20 text-4xl font-extrabold text-white flex justify-center flex-col z-10">
        <div className="my-3">
          <p>
            HI<span className="text-primary">!</span> I am
          </p>
          <p className="text-5xl">
            ENGR.
            <span style={{ color: selectedColor, textDecoration: "underline" }}>
              JOSEPH RUSSEL
            </span>
          </p>
        </div>
        <p className="italic text-white opacity-70 text-xl">
          Mechanical Engineer
        </p>
        <p className="italic text-white opacity-70 text-xl">Developer</p>
        <div className="my-10 flex flex-row items-center">
          <p className="text-2xl bg-primary p-2 mr-5 cursor-pointer active:opacity-70">
            HIRE ME
          </p>
          <p className="text-2xl hover:cursor-pointer active:opacity-70">
            Resumé
          </p>
        </div>
      </div>
      <div className="w-full bg-secondary h-[25%] self-end p-10 flex-row flex justify-between items-center">
        <div>
          <p className="text-white font-semibold text-lg">TepDev</p>
          <p className="text-white font-semibold text-lg">Services</p>
          <p className="my-4 text-white opacity-40 cursor-pointer active:opacity-30">
            VISIT US
          </p>
        </div>
        <div className="flex flex-row justify-around w-40">
          <FaFacebook
            size={30}
            className="hover:cursor-pointer text-black active:text-accent"
          />
          <FaTwitter
            size={30}
            className="hover:cursor-pointer text-black active:text-accent"
          />
          <FaGithub
            size={30}
            className="hover:cursor-pointer text-black active:text-accent"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
