import { useState } from "react";
import React, { useRef } from "react";
import "./solid.css";

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
    <section className="Solid __main">
      <h1 className="__heading">Solid</h1>
      <section className="__preview-wrapper">
        <svg
          className="__preview"
          width="2520"
          height="1440"
          viewBox="0 0 2520 1440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2520 0H0V1440H2520V0Z" fill={color1} />
        </svg>
        <button className="__download-button" onClick={downloadSVG}>
          <img className="__download-icon" src="images/download.svg" alt="" />
        </button>
      </section>
      {/*  */}
      <svg
        className="__downloadable-svg"
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
      <h1 className="__sub-heading">Pick Color:</h1>
      <section className="__picker-wrapper">
        <input
          className="__color-picker"
          type="color"
          name="color-picker-1"
          value={color1}
          onChange={changeColor1}
        />
      </section>
    </section>
  );
}

export default Solid;
