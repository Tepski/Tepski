import React, { useEffect } from "react";
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

  useEffect(() => {
    console.log(imageInView);
  }, [imageInView]);

  return (
    <div className="w-full bg-background">
      <div className="flex flex-row h-full w-full">
        <div className="relative h-full w-full flex justify-center items-center">
          <animated.div style={props}>
            <div
              className="z-10 p-2 bg-secondary rounded-3xla self-start rounded-2xl"
              ref={imageRef}
            >
              <img
                src={Image}
                className="xl:h-[330px] 2xl:h-[380px] w-auto rounded-xl"
                alt=""
              />
            </div>
            {/* <div className="h-full w-[300px] right-24 bg-black absolute z-0"></div> */}
          </animated.div>
        </div>
        <div className="bg-background h-full w-full justify-center flex py-4 px-10 flex-col">
          {imageInView && (
            <animated.div style={textAnimate}>
              <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-base text-white font-semibold">
                Who am I?
              </p>
              <p className="text-white 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-start sm:text-xs my-4 border-l-4 border-l-primary px-3">
                I was born in Zambales, Philippines, and I am a Registered
                Mechanical Engineer with a passion for designing innovative
                solutions. Alongside my engineering background, I have developed
                a strong interest in web and mobile development, teaching myself
                through various projects.
              </p>
              <p className="text-white 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-start border-l-4 border-l-primary px-3">
                I am currently seeking new opportunities to apply my skills and
                continue learning in a collaborative and innovative environment.
              </p>
            </animated.div>
          )}
        </div>
      </div>
      {/* <div
        className="h-screen w-full flex justify-center items-center bg-background"
        ref={ref}
      >
        <animated.div>
          <div className="w-40 h-40 bg-white" />
        </animated.div>
      </div> */}
    </div>
  );
};

export default About;
