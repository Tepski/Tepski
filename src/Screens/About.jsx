import React, { useEffect, useState } from "react";
import Image from "../assets/IMAGE-w-tape.png";
import { useSpring, animated } from "react-spring";
import Education from "../components/Education";
import { FaCaretDown } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";
import Blob from "../assets/Blob.png";

const About = () => {
  const handleDownload = () => {
    // const fileUrl = Resume;

    // const link = document.createElement("a");
    // link.href = fileUrl;
    // link.setAttribute("download", "JosephLadrillonoResume.pdf");

    // document.body.appendChild(link);

    // link.click();

    // document.body.removeChild(link);
    alert("DOWNLOADED");
  };

  const AboutText = `I am Joseph Russel Ladrillono, I was born in Zambales, Philippines, and I am a Registered
  Mechanical Engineer with a passion for designing innovative
  solutions. Alongside my engineering background, I have developed a
  strong interest in web and mobile development, teaching myself
  through various projects. `;

  const ForHireText = `I am currently seeking new opportunities to apply my skills and
  continue learning in a collaborative and innovative environment.
  #HireMePlease`;

  return (
    <div
      className="flex w-full h-full items-start bg-secondaryrounded-t-full flex-col bg-contain"
      style={{
        backgroundImage: `url(${Blob})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "50%",
      }}
    >
      <div className="w-full h-full justify-items-center overflow-y-scroll place-items-center pe-4 bg-balack/50">
        <div className="flex w-full flex-row justify-between items-center">
          <div className="flex h-full justify-between flex-row items-center w-full">
            <p className="text-text 2xl:text-6xl sm:text-2xl font-extrabold">
              <span className="text-primary ">About</span> me
            </p>
            <p
              onClick={handleDownload}
              className="bg-background flex 2xl:px-5 2xl:py-2 sm:px-3 sm:py-1.5 2xl:text-sm sm:text-[10px] rounded-full text-primary 2xl:border-2 sm:border-[1px] border-primary hover:opacity-60 active:text-purple-300 hover:cursor-pointer"
            >
              Download Resumé
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full mt-0 rounded-3xl px-14">
          <div className="flex relative w-1/2 justify-center">
            <img
              src={Image}
              className="w-auto 2xl:h-96 sm:h-48 self-center rotate-6"
            />
          </div>
          <div className="flex 2xl:text-xl sm:text-xs w-1/2 flex-col px-10">
            <p className="2xl:text-3xl sm:text-base font-extrabold text-center">
              <span className="text-accent">Who</span> Am I?
            </p>
            <p className="text-center font-extrabold 2xl:text-4xl sm:text-lg 2xl:pb-5 sm:pb-2 2xl:py-2 sm:py-0 border-b-4 border-b-primary border-dashed">
              I'm <span className="text-accent">JOSEPH</span> RUSSEL
            </p>
            <p className="text-center 2xl:py-5 sm:py-2">
              I was born in Zambales, Philippines, and I am a Registered
              Mechanical Engineer with a passion for designing innovative
              solutions. Alongside my engineering background, I have developed a
              strong interest in web and mobile development, teaching myself
              through various projects.
            </p>
          </div>
        </div>
        <div>
          <Education />
        </div>
      </div>
    </div>
  );
};

export default About;
