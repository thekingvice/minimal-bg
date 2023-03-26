import { useState } from "react";
import "./App.css";
import "./Gradient.jsx";
// import Nav from "./Nav";
import Gradient from "./Gradient.jsx";
import Saturn from "./Saturn";
import Solid from "./Solid";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Saturn />
      <Gradient />
      <Solid />
    </div>
  );
}

export default App;
