import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HobbyIntroduction from "./components/Introduction";
import MyFood from "./components/Food";

function App() {
  return (
    <>
      <div className="App">
        <h1>Sandwiches</h1>
        <HobbyIntroduction />
        <MyFood />
      </div>
    </>
  );
}

export default App;
