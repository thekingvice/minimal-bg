import { useState } from "react";
import "./App.css";
import React, { useRef } from "react";

function Gradient() {
  //color picker
  const [color1, pickColor1] = useState("#A75DCA");

  const changeColor1 = (event) => {
    pickColor1(event.target.value);
  };

  // color picker 2
  const [color2, pickColor2] = useState("#202020");

  const changeColor2 = (event) => {
    pickColor2(event.target.value);
  };

  const svgRef = useRef(null);

  const downloadSVG = () => {
    const svgBlob = new Blob([svgRef.current.outerHTML], {
      type: "image/svg+xml",
    });
    const svgURL = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgURL;
    downloadLink.download = "gradient.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgURL);
  };

  return (
    <section className="Gradient">
      <svg
        width="2520"
        height="1440"
        viewBox="0 0 2520 1440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="2520" height="1440" fill="url(#paint0_linear_1_2)" />
        <defs>
          <linearGradient
            id="paint0_linear_1_2"
            x1="1260"
            y1="0"
            x2="1260"
            y2="1440"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={color1} />
            <stop offset="1" stop-color={color2} />
          </linearGradient>
        </defs>
      </svg>
      {/*  */}
      <svg
        ref={svgRef}
        width="2520"
        height="1440"
        viewBox="0 0 2520 1440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="2520" height="1440" fill="url(#paint0_linear_1_2)" />
        <defs>
          <linearGradient
            id="paint0_linear_1_2"
            x1="1260"
            y1="0"
            x2="1260"
            y2="1440"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={color1} />
            <stop offset="1" stop-color={color2} />
          </linearGradient>
        </defs>
      </svg>
      {/*  */}
      <input
        type="color"
        name="color-picker-1"
        value={color1}
        onChange={changeColor1}
      />
      <input
        type="color"
        name="color-picker-2"
        value={color2}
        onChange={changeColor2}
      />
      <button onClick={downloadSVG}>Download SVG</button>
    </section>
  );
}

export default Gradient;
