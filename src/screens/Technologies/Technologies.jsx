import React from "react";
import "./Technologies.css";
import { techs } from "./Techs";

function Technologies() {
  const techList = techs.map((tech, index) => {
    return (
      <div className="tech-frame background-animation" key={index}>
        <img src={tech.image} alt={tech.name} />
        <p>{tech.name}</p>
      </div>
    );
  });

  return (
    <div id="technologies" className="technologies-container">
      <h1>Some of the Technologies I work with</h1>
      <div className="tech-list-container">
        {techList}
        {techList}
      </div>
      <h3>And more...</h3>
    </div>
  );
}

export default Technologies;
