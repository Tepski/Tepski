import React from "react";
import Logo from "../assets/TepDevLogo.svg";

const MobileNavBar = () => {
  return (
    <div className="h-[12.5%] flex justify-center items-center flex-col">
      <img src={Logo} className="h-44 aspect-square" alt="" />
      <p className="text-white">MOBILE VIEW IS UNDER MAINTENANCE</p>
    </div>
  );
};

export default MobileNavBar;
