import { useState } from "react";
import React, { useRef } from "react";
import "./solid.css";

function Saturn() {
  //color picker 1
  const [color1, pickColor1] = useState("#202020");

  const changeColor1 = (event) => {
    pickColor1(event.target.value);
  };
  //color picker 2
  const [color2, pickColor2] = useState("#FFC675");

  const changeColor2 = (event) => {
    pickColor2(event.target.value);
  };
  //color picker 3
  const [color3, pickColor3] = useState("#7400AA");

  const changeColor3 = (event) => {
    pickColor3(event.target.value);
  };
  //color picker 4
  const [color4, pickColor4] = useState("#85FFFD");

  const changeColor4 = (event) => {
    pickColor4(event.target.value);
  };
  //color picker 5
  const [color5, pickColor5] = useState("#FF00F7");

  const changeColor5 = (event) => {
    pickColor5(event.target.value);
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
    downloadLink.download = "saturn.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgURL);
  };

  return (
    <section className="Saturn __main" id="saturn">
      <h1 className="__heading">Saturn</h1>
      <section className="__preview-wrapper">
        <svg
          className="__preview"
          width="2560"
          height="1440"
          viewBox="0 0 2560 1440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="2560" height="1440" fill={color1} />
          <circle cx="1280" cy="720" r="375" fill="url(#paint0_linear_10_47)" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1647.3 644.386C1705.1 641.398 1740.12 644.358 1741.91 654.16C1746.37 678.55 1543.39 736.062 1288.56 782.617C1033.72 829.172 823.523 847.142 819.068 822.753C817.218 812.631 851.095 796.804 909.579 778.424C907.873 767.605 906.643 756.727 905.89 745.822C641.722 809.065 463.834 872.703 470.196 907.526C479.141 956.488 848.941 929.946 1296.17 848.243C1743.4 766.54 2098.7 660.616 2089.75 611.654C2083.5 577.449 1901.14 580.093 1639.31 612.649C1642.43 623.096 1645.09 633.685 1647.3 644.386Z"
            fill="url(#paint1_linear_10_47)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_47"
              x1="1280"
              y1="345"
              x2="1700"
              y2="1042.5"
              gradientUnits="userSpaceOnUse"
            >
              {/*  */}
              <stop stop-color={color2} />
              <stop offset="1" stop-color={color3} stop-opacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_10_47"
              x1="1098.5"
              y1="540"
              x2="2246"
              y2="888"
              gradientUnits="userSpaceOnUse"
            >
              {/*  */}
              <stop stop-color={color4} />
              <stop offset="1" stop-color={color5} stop-opacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
        <button className="__download-button" onClick={downloadSVG}>
          <img className="__download-icon" src="/download.svg" alt="" />
        </button>
      </section>
      {/*  */}
      <svg
        className="__downloadable-svg"
        ref={svgRef}
        width="2560"
        height="1440"
        viewBox="0 0 2560 1440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="2560" height="1440" fill={color1} />
        <circle cx="1280" cy="720" r="375" fill="url(#paint0_linear_10_47)" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1647.3 644.386C1705.1 641.398 1740.12 644.358 1741.91 654.16C1746.37 678.55 1543.39 736.062 1288.56 782.617C1033.72 829.172 823.523 847.142 819.068 822.753C817.218 812.631 851.095 796.804 909.579 778.424C907.873 767.605 906.643 756.727 905.89 745.822C641.722 809.065 463.834 872.703 470.196 907.526C479.141 956.488 848.941 929.946 1296.17 848.243C1743.4 766.54 2098.7 660.616 2089.75 611.654C2083.5 577.449 1901.14 580.093 1639.31 612.649C1642.43 623.096 1645.09 633.685 1647.3 644.386Z"
          fill="url(#paint1_linear_10_47)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_10_47"
            x1="1280"
            y1="345"
            x2="1700"
            y2="1042.5"
            gradientUnits="userSpaceOnUse"
          >
            {/*  */}
            <stop stop-color={color2} />
            <stop offset="1" stop-color={color3} stop-opacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_10_47"
            x1="1098.5"
            y1="540"
            x2="2246"
            y2="888"
            gradientUnits="userSpaceOnUse"
          >
            {/*  */}
            <stop stop-color={color4} />
            <stop offset="1" stop-color={color5} stop-opacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
      {/*  */}
      <h1 className="__sub-heading">Pick Colors:</h1>
      <section className="__picker-wrapper">
        <input
          className="__color-picker"
          type="color"
          name="color-picker-1"
          value={color1}
          onChange={changeColor1}
        />
        <input
          className="__color-picker"
          type="color"
          name="color-picker-2"
          value={color2}
          onChange={changeColor2}
        />
        <input
          className="__color-picker"
          type="color"
          name="color-picker-3"
          value={color3}
          onChange={changeColor3}
        />
        <input
          className="__color-picker"
          type="color"
          name="color-picker-4"
          value={color4}
          onChange={changeColor4}
        />
        <input
          className="__color-picker"
          type="color"
          name="color-picker-5"
          value={color5}
          onChange={changeColor5}
        />
      </section>
    </section>
  );
}

export default Saturn;
