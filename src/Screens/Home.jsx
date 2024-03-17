import React, { useEffect, useState } from "react";
import Details from "../components/Details";
import HeroImage from "../components/HeroImage";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="flex-row flex w-full">
      <Details />
      <HeroImage />
    </div>
  );
};

export default Home;
