import { useState } from "react";
import "./App.css";

// function Gradient() {
//   //color picker
//   const [color, pickColor] = useState("#A75DCA");

//   const changeColor = (event) => {
//     pickColor(event.target.value);
//   };

//   //color picker 2
//   const [color2, pickColor2] = useState("#7400AA");

//   const changeColor2 = (event) => {
//     pickColor2(event.target.value);
//   };

//   return (
//     <section className="Gradient">
//       <svg
//         width="400"
//         height="400"
//         viewBox="0 0 400 400"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect width="400" height="400" fill="url(#paint0_linear_1_2)" />
//         <defs>
//           <linearGradient
//             id="paint0_linear_1_2"
//             x1="200"
//             y1="0"
//             x2="200"
//             y2="400"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stop-color={color} />
//             <stop offset="1" stop-color={color2} stop-opacity="0" />
//           </linearGradient>
//         </defs>
//       </svg>
//       <input
//         type="color"
//         name="color-picker"
//         value={color}
//         onChange={changeColor}
//       />
//       <input
//         type="color"
//         name="color-picker-2"
//         value={color2}
//         onChange={changeColor2}
//       />
//     </section>
//   );
// }

//test

import React, { useRef } from "react";

function Gradient() {
  //color picker
  const [color, pickColor] = useState("#A75DCA");

  const changeColor = (event) => {
    pickColor(event.target.value);
  };

  //color picker 2
  const [color2, pickColor2] = useState("#7400AA");

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
        ref={svgRef}
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
            <stop offset="1" stop-color={color2} stop-opacity="100" />
          </linearGradient>
        </defs>
      </svg>
      <input
        type="color"
        name="color-picker"
        value={color}
        onChange={changeColor}
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
