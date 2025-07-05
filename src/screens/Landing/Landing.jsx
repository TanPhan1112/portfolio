import React from "react";
import "./Landing.css";
import AnimatedBackground from "../Components/AnimatedBackground/AnimatedBackground";
import Typewritter from "../Components/Typewritter/Typewritter";

let msgArray = [
  " ",
  "Hello, I'm Tan.",
  "I'm a Web Developer.",
  "Also known as a",
  "Frontend developer.",
  "Backend developer.",
  "Fullstack developer.",
  "I love coding.",
  "Welcome to my portfolio!",
  " ",
];

function Landing() {
  return (
    <AnimatedBackground>
      <div className="landing-type">
        <div>Who am I?</div>
        <Typewritter data={msgArray} />
      </div>
    </AnimatedBackground>
  );
}

export default Landing;
