import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";

function Details() {
  const [selectedColor, setSelectedColor] = useState("rgb(255, 255, 255)");

  const IconList = [
    { icon: <FaGithub />, link: "https://www.github.com/Tepski" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/otepzxcki" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/josephrusselladrillono/",
    },
  ];

  const handleDownload = () => {
    // Create a URL for the file
    const fileUrl = Resume; // Replace with your file URL

    // Create an anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "JosephLadrillonoResume.pdf"); // Set the desired file name

    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up - remove the anchor from the body
    document.body.removeChild(link);
  };

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
      <div className="w-full h-[75%] py-20 ps-20 text-4xl font-extrabold text-white flex justify-center items-center flex-col z-10 relative">
        <div>
          <div className="py-3 lg:text-3xl xl:text-5xl sm:text-lg md:text-xl d2xl:text-7xl">
            <p>
              HI<span className="text-primary">!</span> I am
            </p>
            <p className="">
              ENGR.{" "}
              <span
                style={{ color: selectedColor, textDecoration: "underline" }}
              >
                JOSEPH RUSSEL
              </span>
            </p>
          </div>
          <div className="lg:text-sm xl:text-xl sm:text-xs d2xl:text-3xl">
            <p className="italic text-white opacity-70 font-extralight">
              Licensed Mechanical Engineer
            </p>
            <p className="italic text-white opacity-70 font-extralight">
              Developer
            </p>
            <div className="sm:my-3 md:my-5 xl:my-10 flex flex-row items-center xl:text-xl lg:text-base sm:text-xs md:text-xs d2xl:text-5xl">
              <a href={Resume} rel="noreferrer noopener" target="_blank">
                <p className="bg-primary xl:p-2 sm:p-2 d2xl:p-4 mr-1 cursor-pointer active:opacity-70 text-background border-2 border-primary ">
                  HIRE ME
                </p>
              </a>
              <p
                className="hover:cursor-pointer active:opacity-70 border-2 sm:p-2 d2xl:p-4 font-thin border-primary"
                onClick={handleDownload}
              >
                Resumé
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-40 h-20 bg-secondary bottom-0 right-0" />
        <div className="absolute w-40 h-20 bg-background bottom-0 right-0 rounded-br-[100px]" />
      </div>
      <div className="w-full bg-secondary h-[25%] self-end p-10 xl:px-20 sm:px-14 flex-row flex justify-between items-center rounded-tl-[100px]">
        <div className="lg:text-lg sm:text-xs xl:text-xl d2xl:text-5xl">
          <p className="text-white font-semibold">TepDev</p>
          <p className="text-white font-semibold">Services</p>
          <p className="sm:my-1 my-4 text-white xl:text-sm sm:text-[8px] d2xl:text-d2xl opacity-40 cursor-pointer active:opacity-30">
            VISIT US
          </p>
        </div>
        {/* <div className="flex flex-row justify-around lg:text-3xl xl:text-4xl">
          <FaFacebook className="hover:cursor-pointer text-black hover:text-accent active:opacity-70 xl:mx-3 md:mx-2 sm:ms-1" />
          <FaLinkedin className="hover:cursor-pointer text-black hover:text-accent active:opacity-70 xl:mx-3 md:mx-2 sm:ms-1" />
          <a
            href="https://github.com/Tepski/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:cursor-pointer text-black hover:text-accent active:opacity-70 xl:mx-3 md:mx-2 sm:ms-1" />
          </a>
        </div> */}
        <div className="flex">
          {IconList.map((item, index) => {
            return (
              <div key={index.toString()}>
                <a
                  href={item.link}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex flex-row justify-around lg:text-3xl xl:text-4xl d2xl:text-6xl"
                >
                  <div className="hover:cursor-pointer text-background hover:text-accent active:opacity-70 xl:mx-3 md:mx-2 sm:ms-1">
                    {item.icon}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
