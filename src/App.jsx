import { useState } from "react";
import "./App.css";
import "./Gradient.jsx";
import Gradient from "./Gradient.jsx";
import Solid from "./Solid";

function App() {
  return (
    <div className="App">
      <Solid />
      <Gradient />
    </div>
  );
}

export default App;
