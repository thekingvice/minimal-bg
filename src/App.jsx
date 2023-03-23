import { useState } from "react";
import "./App.css";
import "./Gradient.jsx";
import Gradient from "./Gradient.jsx";
import Saturn from "./Saturn";
import Solid from "./Solid";

function App() {
  return (
    <div className="App">
      <Solid />
      <Gradient />
      <Saturn />
    </div>
  );
}

export default App;
