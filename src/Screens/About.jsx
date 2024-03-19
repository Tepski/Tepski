import React from "react";
import Image from "../assets/IMAGE.jpeg";

const About = () => {
  return (
    <div className="w-full bg-background">
      <div className="flex flex-row h-full w-full">
        <div className="bg-background h-full w-full justify-center flex py-4 px-10 flex-col">
          <p className="text-4xl text-white font-semibold pb-12">Who am I?</p>
          <p className="text-white text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            dolores non iusto alias inventore ea, culpa sapiente earum labore
            possimus libero hic accusamus dicta. Reprehenderit blanditiis
            corporis ipsam tenetur unde sapiente, laudantium repellendus ad?
            Tenetur facilis labore assumenda alias rem sapiente iure optio
            quisquam voluptate nisi eligendi, atque explicabo fugiat.
          </p>
        </div>
        <div className="relative h-full w-full flex justify-center items-center">
          <div className="z-10 p-4 bg-secondary rounded-3xl">
            <img src={Image} className="h-[380px] w-auto rounded-xl" alt="" />
          </div>
          {/* <div className="h-full w-[300px] right-24 bg-black absolute z-0"></div> */}
        </div>
      </div>
      <div className="h-full w-full flex bg-background"></div>
    </div>
  );
};

export default About;
