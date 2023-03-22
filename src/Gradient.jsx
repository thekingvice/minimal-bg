import { useState } from "react";
import "./App.css";

function Gradient() {
  //color picker
  const [color, pickColor] = useState("#A75DCA");

  const changeColor = (event) => {
    pickColor(event.target.value);
  };

  return (
    <section className="Gradient">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="400" fill="url(#paint0_linear_1_2)" />
        <defs>
          <linearGradient
            id="paint0_linear_1_2"
            x1="200"
            y1="0"
            x2="200"
            y2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={color} />
            <stop offset="1" stop-color="#7400AA" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {/* <button className="Gradient__change-color" onClick={changeStop}>
        {stop}
      </button> */}
      <input
        type="color"
        name="color-picker"
        value={color}
        id=""
        onChange={changeColor}
      />
      <input type="text" />
    </section>
  );
}

export default Gradient;
