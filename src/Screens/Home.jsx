import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Details from "../components/Details";
import HeroImage from "../components/HeroImage";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="w-[80%] h-screen">
      <NavBar />
      <div className="flex h-[87.5%] flex-row">
        <Details />
        <HeroImage />
      </div>
    </div>
  );
};

export default Home;
