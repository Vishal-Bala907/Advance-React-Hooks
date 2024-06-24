import React, { useRef, useState } from "react";

export default function SecondComp({ color }) {
  const col = useRef("");
  // let changeColor = () => {
  //   document.getElementsByClassName("second")[0].style.backgroundColor =
  //     col.current.value;
  // };
  return (
    <div className="second" style={{ backgroundColor: `${color}` }}>
      <p>Second component</p>
      <p>Enter a color name</p>
      <input type="text" name="colorName" ref={col} />
      <button onClick={() => changeColor()}>Change</button>
    </div>
  );
}
