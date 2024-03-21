import React, { useEffect, useState } from "react";
import Image from "../assets/IMAGE.jpeg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const props = useSpring({
    from: { transform: "translateY(100%)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 800 },
  });

  const boxAnimate = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(100%)",
    config: { duration: 800 },
  });

  const textAnimate = useSpring({
    opacity: imageInView ? 1 : 0,
    config: { duration: 2000 },
  });

  return (
    <div className=" flex w-full h-full items-start bg-secondary rounded-t-full">
      <div className="flex w-full flex-col justify-start items-start">
        <p className="text-text text-8xl font-extrabold">
          <span className="text-primary">About</span> me
        </p>
        <p className="bg-background px-5 py-2 text-base rounded-full text-primary border-2 border-primary hover:opacity-60 active:text-xl hover:cursor-pointer">
          Download Resumé
        </p>
      </div>
    </div>
  );
};

export default About;
