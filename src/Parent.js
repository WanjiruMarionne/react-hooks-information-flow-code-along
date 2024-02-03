import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

/*function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child />
      <Child />
    </div>
  );
}*/

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); // initial value for color state
  const [childrenColor, setChildrenColor] = useState("#FFF");

  /*function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // update color state to a new value
  }*/

  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }

  /*return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child />
      <Child />
    </div>
  );*/

  /*return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} />
      <Child onChangeColor={handleChangeColor} />
    </div>
  );*/

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
