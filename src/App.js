import React from "react";
import _ from "lodash";
import { oppositeNumber, shuffle, symbols } from "./Helper";
let w = window.innerWidth;
const timesMatrix = () => {
  const matrix = [];
  var i;
  for (i = 0; i < w / 30; i++) {
    const fontSize = _.random(10, 40);
    const animationDelay = `${fontSize / 10}s`;
     // specifies the speed for each line depend on the font size to show how far is a line
    const animationDuration = `${oppositeNumber(fontSize) + 10}s`;
    // specifies the opacity for the color depend on the font size to show how far is a line
    const color = `rgba(0, 233, 50, ${fontSize / 40})`;
    matrix.push(
      <pre
        style={{
          fontSize: `${fontSize}px`,
          animationDelay,
          animationDuration,
          color
        }}
      >
        {shuffle(symbols)}
      </pre>
    );
  }
  return matrix;
};
export default () => <section className="matrix">{timesMatrix()}</section>;
