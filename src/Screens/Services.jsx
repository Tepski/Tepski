import React from "react";
const Services = () => {
  const Card = () => {
    return (
      <div className=" bg-accent w-[30%] h-[90%] flex justify-center items-center flex-col hover:bg-primary hover: cursor-pointer">
        <p>SERVICES' NAME</p>
        <p>Brief Description</p>
      </div>
    );
  };

  return (
    <div className="bg-secondary h-full w-full rounded-tl-full rounded-tr-[4500px] flex justify-center items-center flex-col my-5">
      <div className="mb-2 flex justify-between w-full items-center">
        <p className="text-text 2xl:text-8xl sm:text-5xl font-extrabold">
          My <span className="text-primary">Services</span>
        </p>
        <p className="bg-transparent border-2 border-primary rounded-full px-4 py-2 2xl:text-2xl sm:text-sm">
          Read More
        </p>
      </div>
      <div className="flex h-full justify-center gap-20 w-full">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Services;
