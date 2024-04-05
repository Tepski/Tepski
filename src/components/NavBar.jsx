import React, { useState } from "react";
import Logo from "../assets/TepDevLogo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const [selected, setSelected] = useState(0);

  const handleSelected = (index) => {
    return selected == index && "border-b-4 border-b-accent";
  };

  const navBarItems = [
    { title: "Home", link: "/Tepski" },
    { title: "About", link: "/Tepski/About" },
    { title: "Projects", link: "/Tepski/Projects" },
    { title: "Services", link: "/Tepski/Services" },
  ];

  return (
    <div className="border-b-primarya border-b-4a px-10 py-2 bg-background w-full justify-between items-center flex flex-row border-b-2 border-b-primary">
      <div className="bg-background rounded-full border-2 border-primary">
        <img
          src={Logo}
          className="xl:h-[60px] 2xl:h-18 lg:h-8 sm:h-8 aspect-square"
          alt="TepDev Logo"
        />
      </div>
      <div className="flex flex-row">
        {navBarItems.map((item, index) => {
          return (
            <div className="px-4" key={index}>
              <Link to={item.link}>
                <p
                  className={`text-text lg:text-sm xl:text-xl d2xl:text-3xl sm:text-xs hover:text-primary cursor-pointer active:opacity-70 ${handleSelected(
                    index
                  )}`}
                  onClick={() => {
                    setSelected(index);
                  }}
                >
                  {item.title.toUpperCase()}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="rounded-full text-white border-2 border-primary bg-primary px-4 py-1.5 lg:text-sm xl:text-xl d2xl:text-d2xl sm:text-[10px] hover:text-primary hover:bg-background cursor-pointer active:opacity-70">
          CONTACT ME!
        </h2>
      </div>
    </div>
  );
}

export default NavBar;
