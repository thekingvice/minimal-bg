import { useState } from "react";
import React, { useRef } from "react";
import "./App.css";

function Solid() {
  //color picker
  const [color, pickColor] = useState("#A75DCA");

  const changeColor = (event) => {
    pickColor(event.target.value);
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
        ref={svgRef}
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M400 0H0V400H400V0Z" fill={color} />
      </svg>
      <input
        type="color"
        name="color-picker"
        value={color}
        onChange={changeColor}
      />
      <button onClick={downloadSVG}>Download SVG</button>
    </section>
  );
}

export default Solid;
