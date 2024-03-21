import React, { useEffect, useState } from "react";
import Image from "../assets/IMAGE.jpeg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import BluredComponent from "../components/BluredComponent";
import { FaCircle } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";

const About = () => {
  const handleDownload = () => {
    const fileUrl = Resume;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "JosephLadrillonoResume.pdf");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const AboutText = `I was born in Zambales, Philippines, and I am a Registered
  Mechanical Engineer with a passion for designing innovative
  solutions. Alongside my engineering background, I have developed a
  strong interest in web and mobile development, teaching myself
  through various projects. `;

  const ForHireText = `I am currently seeking new opportunities to apply my skills and
  continue learning in a collaborative and innovative environment.
  #HireMePlease`;

  return (
    <div className=" flex w-full h-full items-start bg-secondary rounded-t-full flex-col">
      <div className="flex w-full flex-row justify-between items-center">
        <div>
          <p className="text-text 2xl:text-8xl sm:text-5xl font-extrabold">
            <span className="text-primary">About</span> me
          </p>
          <p
            onClick={handleDownload}
            className="bg-background 2xl:px-5 2xl:py-2 sm:px-2 sm:py-1 2xl:text-base sm:text-[10px] rounded-full text-primary 2xl:border-2 sm:border-[1px] border-primary hover:opacity-60 text-center active:text-xl hover:cursor-pointer"
          >
            Download Resumé
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            STATUS: OPEN FOR WORK
            <FaCircle className="text-lime-300 text-2xl" />
          </p>
        </div>
      </div>
      <div className="flex gap-4 my-10 w-full justify-between">
        <img
          src={Image}
          className="xl:h-[330px] 2xl:h-[380px] w-auto rounded-xl border-4 border-primary"
          alt=""
        />
        <BluredComponent text={AboutText} />
      </div>
    </div>
  );
};

export default About;
