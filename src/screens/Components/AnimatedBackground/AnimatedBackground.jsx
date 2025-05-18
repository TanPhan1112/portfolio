import React from "react";
import "./AnimatedBackground.css";

import { ReactComponent as Battery } from "./SVG/battery.svg";
import { ReactComponent as Bike } from "./SVG/bike.svg";
import { ReactComponent as Cloud } from "./SVG/cloud.svg";
import { ReactComponent as Code } from "./SVG/code.svg";
import { ReactComponent as Coffee } from "./SVG/coffee.svg";
import { ReactComponent as Flask } from "./SVG/flask.svg";
import { ReactComponent as Game } from "./SVG/game.svg";
import { ReactComponent as Git } from "./SVG/git.svg";
import { ReactComponent as Heart } from "./SVG/heart.svg";
import { ReactComponent as Home } from "./SVG/home.svg";
import { ReactComponent as Html } from "./SVG/html.svg";
import { ReactComponent as Js } from "./SVG/js.svg";
import { ReactComponent as Keyboard } from "./SVG/keyboard.svg";
import { ReactComponent as Mic } from "./SVG/mic.svg";
import { ReactComponent as Paper } from "./SVG/paper.svg";
import { ReactComponent as ReactSVG } from "./SVG/react.svg";
import { ReactComponent as Sql } from "./SVG/sql.svg";
import { ReactComponent as Time } from "./SVG/time.svg";
import { ReactComponent as Web } from "./SVG/web.svg";
import { ReactComponent as Weight } from "./SVG/weight.svg";

function AnimatedBackground({ children }) {
  let arr = [];
  let qty = 20;

  for (let i = 0; i < qty; i++) {
    arr.push(i);
  }

  const layers = arr.map((i) => {
    return (
      <div className="animated-row" key={i}>
        <div>
          <Battery />
          {/* <Bike /> */}
          <Cloud />
          <Code />
          <Coffee />
          {/* <Flask /> */}
          <Game />
          <Git />
          <Heart />
          {/* <Home /> */}
          <Html />
          <Js />
          <Keyboard />
          {/* <Mic /> */}
          <Paper />
          <ReactSVG />
          <Sql />
          <Time />
          <Web />
          {/* <Weight /> */}
        </div>
        <div>
          <Battery />
          {/* <Bike /> */}
          <Cloud />
          <Code />
          <Coffee />
          {/* <Flask /> */}
          <Game />
          <Git />
          <Heart />
          {/* <Home /> */}
          <Html />
          <Js />
          <Keyboard />
          {/* <Mic /> */}
          <Paper />
          <ReactSVG />
          <Sql />
          <Time />
          <Web />
          {/* <Weight /> */}
        </div>
      </div>
    );
  });

  return (
    <section className="animated-section">
      {layers}
      {children}
    </section>
  );
}

export default AnimatedBackground;
