import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Gradient from "./Gradient.jsx";
import Saturn from "./Saturn";
import Solid from "./Solid";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Saturn />
      <Gradient />
      <Solid />
      <Footer />
    </div>
  );
}

export default App;
