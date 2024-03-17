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
    { title: "Pojects", link: "/Tepski/Projects" },
    { title: "Services", link: "/Tepski/Services" },
  ];

  return (
    <div className="border-b-primary border-b-4 bg-background w-full h-[12.5%] justify-between px-20 items-center flex flex-row">
      <div className="bg-white rounded-full">
        <img
          src={Logo}
          // style={{ height: 70, aspectRatio: 1 }}
          className="xl:h-[70px] 2xl:h-18 lg:h-8 sm:h-8 aspect-square"
          alt=""
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
        <h2 className="border-text border-2 xl:p-2 sm:p-1 lg:text-sm xl:text-xl d2xl:text-d2xl sm:text-[10px] text-text hover:text-primary hover:border-primary cursor-pointer active:opacity-70">
          CONTACT ME!
        </h2>
      </div>
    </div>
  );
}

export default NavBar;
