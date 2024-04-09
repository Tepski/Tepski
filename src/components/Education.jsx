import React from "react";
import Prmsu from "../assets/PrmsuImage.jpg";
import Logo from "../assets/PrmsuLogo.png";

const Education = () => {
  return (
    <div className="w-full h-screen py-4 px-8">
      <p className="text-2xl font-extrabold mr-40">
        <span className="text-primary">Educational</span> Background
      </p>
      <div className="">
        <div className="gap-2 flex my-4">
          <div className=" h-64 w-[70%] px-5 py-5 relative bg-gray-400/50 rounded-3xl shadow-lg shadow-black/80">
            <div className="z-40">
              <div className="flex w-full justify-between">
                <p className="text-primary italic">Bachelor's Degree</p>
                <p className="text-primary italic">2018 - 2023</p>
              </div>
              <p className="text-4xl text-center py-10 font-extrabold">
                <span className="text-primary">{">"}---</span>
                President Ramon Magsaysay State University
                <span className="text-primary">---{">"}</span>
              </p>
              <p className="text-center text-xl text-gray-800 italic text-semibold">
                Bachelor of Science major in Mechanical Engineering
              </p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-3xl h-64 w-[30%] shadow-lg shadow-black/80 relative overflow-hidden flex items-center">
            <img
              src={Prmsu}
              className="absolute container hover:scale-150 transition opacity-70 hover:opacity-100 ease-in-out duration-1000"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="gap-2 flex my-4">
          <div className="bg-gray-400 rounded-3xl h-64 w-[30%] shadow-lg shadow-black/80" />
          <div className=" h-64 w-[70%] px-5 py-5 relative bg-gray-400/50 rounded-3xl shadow-lg shadow-black/80">
            <div className="z-40">
              <div className="flex w-full justify-between">
                <p className="text-primary underline-offset-4 underline italic">
                  Senior High School
                </p>
                <p className="text-primary italic">2017 - 2018</p>
              </div>
              <p className="text-4xl text-center py-10 font-extrabold">
                <span className="text-primary">{"<"}---</span>
                Magsaysay Memorial College of Zambales, Inc.
                <span className="text-primary">---{"<"}</span>
              </p>
              <p className="text-center text-xl italic text-gray-800">
                Science, Technology, Engineering and Mathematics
              </p>
            </div>
          </div>
        </div>
        <div className="gap-2 flex my-4">
          <div className=" h-64 w-[70%] px-5 py-5 relative bg-gray-400/50 rounded-3xl shadow-lg shadow-black/80">
            <div className="z-40">
              <div className="flex w-full justify-between">
                <p className="text-primary italic">Junior High School</p>
                <p className="text-primary italic">2012 - 2016</p>
              </div>
              <p className="text-4xl text-center py-10 font-extrabold">
                <span className="text-primary">{">"}---</span>Magsaysay Memorial
                College of Zambales, Inc.
                <span className="text-primary">---{">"}</span>
              </p>
              <p className="text-center text-xl italic text-gray-800">
                Grade 7 to Grade 10
              </p>
            </div>
          </div>
          <div className="bg-gray-400 rounded-3xl h-64 w-[30%] shadow-lg shadow-black/80" />
        </div>
        <div className="gap-2 flex my-4">
          <div className="bg-gray-400 rounded-3xl h-64 w-[30%] shadow-lg shadow-black/80" />
          <div className=" h-64 w-[70%] px-5 py-5 relative bg-gray-400/50 rounded-3xl shadow-lg shadow-black/80">
            <div className="z-40">
              <div className="flex w-full justify-between">
                <p className="text-primary italic">Elementary Education</p>
                <p className="text-primary italic">2005 - 2012</p>
              </div>
              <p className="text-4xl text-center py-10 font-extrabold">
                <span className="text-primary">{"<"}---</span>
                Magsaysay Memorial College of Zambales, Inc.
                <span className="text-primary">---{"<"}</span>
              </p>
              <p className="text-center text-xl italic text-gray-800">
                Grade 1 - Grade 6
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
