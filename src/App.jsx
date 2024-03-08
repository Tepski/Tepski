import React, { useState, useEffect } from "react";
import HomeScreen from "./Screens/Home";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  const [count, setCount] = useState(0);
  const [WinWidth, setWinWidth] = useState(window.innerWidth);
  const [WinHeight, setwinHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWinWidth(window.innerWidth);
    setwinHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center flex-row items-center h-screen bg-gradient-to-tr from-background to-blue-950">
        {WinWidth <= 700 || WinHeight > WinWidth ? (
          <MobileNavBar />
        ) : (
          <HomeScreen />
        )}
      </div>
    </>
  );
}

export default App;
