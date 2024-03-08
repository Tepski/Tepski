import React, { useState } from "react";
import HomeScreen from "./Screens/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center flex-row items-center h-screen bg-gradient-to-tr from-background to-blue-950">
        <HomeScreen />
      </div>
    </>
  );
}

export default App;
