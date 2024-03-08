import React, { useEffect, useState } from "react";
import "../src/Homescreen.css";

const HomeScreen = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [spaceKeyPressed, setSpaceKeyPressed] = useState(null);

  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
    console.log("ASJDOAJSd");
  };

  const handleDisplayText = (timer) => {
    let minute = 0;
    let second = 0;
    let milisec = timer;

    while (milisec >= 11) {
      milisec -= 10;
      second++;
    }

    while (second >= 61) {
      second -= 60;
      minute++;
    }

    return `${minute >= 9 ? minute : "0" + minute} : 
            ${second >= 9 ? second : "0" + second} : 
            ${milisec >= 10 ? milisec : "0" + milisec}`;
  };

  useEffect(() => {
    const handleSpaceDown = (event) => {
      if (event.keyCode == 32) {
        setSpaceKeyPressed(true);
      }
    };

    const handleSpaceUp = (event) => {
      if (event.keyCode == 32) {
        setIsRunning(!isRunning);
      }
    };

    window.addEventListener("keydown", handleSpaceDown);
    window.addEventListener("keyup", handleSpaceUp);
    return () => {
      window.removeEventListener("keydown", handleSpaceDown);
      window.removeEventListener("keyup", handleSpaceUp);
    };
  }, []);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="main-container">
      <h1 className="timerText">{handleDisplayText(timer)}</h1>
      <div className="btn-container">
        <button className="timer-btn" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="timer-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
