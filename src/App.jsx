import React, { useState, useEffect } from "react";
import HomeScreen from "./Screens/Home";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  const [count, setCount] = useState(0);
  const [WinSize, setWinSize] = useState();

  const handleResize = () => {
    setWinSize(window.innerWidth);
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
        {WinSize <= 700 ? <MobileNavBar /> : <HomeScreen />}
      </div>
    </>
  );
}

export default App;
