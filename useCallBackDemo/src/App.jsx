import React, { useState } from "react";
import "./App.css";
import SecondComp from "./SecondComp";

export default function App() {
  const [color, setColor] = useState("");
  const [renderCount, setRenderCount] = useState(0);
  let count = renderCount;
  // count++;
  // setRenderCount(count);
  // setRenderCount(renderCount + 1);
  let changeColor = () => {
    document.getElementsByClassName("second")[0].style.backgroundColor =
      col.current.value;
  };

  return (
    <div className="first" style={{ backgroundColor: `${color}` }}>
      <div>
        <label
          htmlFor="color"
          style={{
            textAlign: "center",

            color: "aqua",
          }}
        >
          Select a color{" "}
        </label>
        <select
          name="color"
          id="color"
          onChange={(event) => setColor(event.target.value)}
        >
          <option value="red">Red</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Blue">Blue</option>
          <option value="Purple">Purple</option>
        </select>
        <label htmlFor="render">{renderCount}</label>
      </div>

      <SecondComp color={color} />
    </div>
  );
}
