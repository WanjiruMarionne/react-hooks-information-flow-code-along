import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

/*function Child({ onChangeColor }) {
  return <div className="child" style={{ backgroundColor: "#FFF" }} />;
}*/

/*function Child({ onChangeColor }) {
  console.log(onChangeColor);
  return <div className="child" style={{ backgroundColor: "#FFF" }} />;

  return (
    <div
      onClick={onChangeColor}
      className="child"
      style={{ backgroundColor: "#FFF" }}
    />
  );
}*/

/*function Child({ onChangeColor, color }) {
  return (
    <div
      onClick={onChangeColor}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}*/

function Child({ onChangeColor, color }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
