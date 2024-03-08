import React, { useState } from "react";
import Logo from "../assets/TepDevLogo.svg";

function NavBar() {
  const [selected, setSelected] = useState(0);

  const handleSelected = (index) => {
    return selected == index && "border-b-4 border-b-accent";
  };

  const navBarItems = [
    { title: "Home", link: "" },
    { title: "About", link: "" },
    { title: "Pojects", link: "" },
    { title: "Services", link: "" },
  ];

  return (
    <div className="border-b-primary border-b-4 w-full h-[12.5%] justify-between px-20 items-center flex flex-row">
      <div className="bg-white rounded-full">
        <img src={Logo} style={{ height: 70, aspectRatio: 1 }} alt="" />
      </div>
      <div className="flex flex-row">
        {navBarItems.map((item, index) => {
          return (
            <div className="px-4" key={index}>
              <p
                className={`text-text lg:text-lg xl:text-3xl hover:text-primary cursor-pointer active:opacity-70 ${handleSelected(
                  index
                )}`}
                onClick={() => setSelected(index)}
              >
                {item.title.toUpperCase()}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="border-text border-2 p-2 lg:text-lg xl:text-2xl text-text hover:text-primary hover:border-primary cursor-pointer active:opacity-70">
          CONTACT ME!
        </h2>
      </div>
    </div>
  );
}

export default NavBar;
