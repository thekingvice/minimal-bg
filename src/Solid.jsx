import { useState } from "react";
import React, { useRef } from "react";
import "./App.css";

function Solid() {
  //color picker
  const [color1, pickColor1] = useState("#A75DCA");

  const changeColor1 = (event) => {
    pickColor1(event.target.value);
  };

  //download
  const svgRef = useRef(null);

  const downloadSVG = () => {
    const svgBlob = new Blob([svgRef.current.outerHTML], {
      type: "image/svg+xml",
    });
    const svgURL = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgURL;
    downloadLink.download = "solid.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgURL);
  };

  return (
    <section className="Solid">
      <svg
        width="2520"
        height="1440"
        viewBox="0 0 2520 1440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2520 0H0V1440H2520V0Z" fill={color1} />
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
        <path d="M2520 0H0V1440H2520V0Z" fill={color1} />
      </svg>
      {/*  */}
      <input
        type="color"
        name="color-picker-1"
        value={color1}
        onChange={changeColor1}
      />
      <button onClick={downloadSVG}>Download SVG</button>
    </section>
  );
}

export default Solid;
