import React, { useState, useEffect } from "react";
import HomeScreen from "./Screens/Home";
import MobileNavBar from "./components/MobileNavBar";
import NavBar from "./components/NavBar";
import About from "./Screens/About";
import Projects from "./Screens/Projects";
import Services from "./Screens/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
    <Router>
      <div className="flex justify-center items-center bg-background flex-col">
        <div className="w-[80%] h-screen">
          {WinWidth >= 735 ? (
            <div>
              <NavBar />
              <div className="flex h-[87.5%] justify-center">
                <Routes>
                  <Route element={<HomeScreen />} path="/Tepski" />
                  <Route element={<About />} path="/Tepski/About" />
                  <Route element={<Projects />} path="/Tepski/Projects" />
                  <Route element={<Services />} path="/Tepski/Services" />
                </Routes>
              </div>
            </div>
          ) : (
            <MobileNavBar />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
