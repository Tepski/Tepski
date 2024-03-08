import React from "react";
import Navbar from "../components/NavBar";
import Details from "../components/Details";
import HeroImage from "../components/HeroImage";

const Home = () => {
  return (
    <div className="w-[80%] h-screen">
      <Navbar />
      <div className="flex h-[87.5%] flex-row">
        <Details />
        <HeroImage />
      </div>
    </div>
  );
};

export default Home;
