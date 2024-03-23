import React from "react";

const Projects = () => {
  return (
    <div className="flex w-full h-full flex-col">
      <p className="text-4xl text-text">Education</p>
      <div className="w-full flex h-full flex-col">
        <div className="flex w-full py-0 my-0">
          <div style={{ flex: 2 }} className="bg-accesnt h-96 relative">
            <div className="w-0.5 h-full bg-primary absolute left-1/2 z-10" />
            <div className="flex w-full h-full items-center justify-center relative z-20">
              <p
                style={{
                  writingMode: "sideways-lr",
                  WebkitTextStroke: "2px black",
                  color: "white",
                }}
                className="font-extrabold text-6xl bg-background"
              >
                2018-2023
              </p>
            </div>
          </div>
          <div style={{ flex: 5 }} className="bg-primarsy h-96">
            <div className="flex w-[80%] self-start h-auto bg-accent">
              <p className="text-3xl px-4">COLLEGE</p>
            </div>
            <div className="flex h-full w-full justify-start items-center flex-col">
              <p className="text-2xl">
                President Ramon Magsaysay State Uninversity
              </p>
              <p className="font-semibold text-xl">BS MECHANICAL ENGINEERING</p>
            </div>
          </div>
          <div style={{ flex: 5 }} className="bg-secondary h-96" />
        </div>
      </div>
      <div className="w-full flex h-full flex-col">
        <div className="flex w-full py-0">
          <div style={{ flex: 2 }} className="bg-accesnt h-96 relative">
            <div className="w-0.5 h-full bg-primary absolute left-1/2 z-10" />
            <div className="flex w-full h-full items-center justify-center relative z-20">
              <p
                style={{
                  writingMode: "sideways-lr",
                  WebkitTextStroke: "2px black",
                  color: "white",
                }}
                className="font-extrabold text-6xl bg-background"
              >
                2017-2018
              </p>
            </div>
          </div>
          <div style={{ flex: 5 }} className="bg-primarsy h-96">
            <div className="flex h-full w-full justify-start items-center flex-col">
              <p className="text-2xl">Magsaysay Memorial College</p>
              <p className="font-semibold text-xl">STEM STRAND</p>
            </div>
          </div>
          <div style={{ flex: 5 }} className="bg-secondary h-96" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
