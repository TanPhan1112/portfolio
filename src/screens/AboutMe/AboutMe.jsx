import React from "react";
import "./AboutMe.css";

let image = "https://picsum.photos/800";

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
      <img src={image} alt="About Me" />
      <div>
        <h1>About Me</h1>
        <p>
          I'm a passionate front-end web developer with expertise in React and
          the MERN stack. I thrive on crafting seamless, responsive user
          experiences that merge creativity with functionality. With a strong
          foundation in JavaScript, I specialize in building dynamic web
          applications that are both visually appealing and highly performant.
          I'm always eager to explore new technologies, refine my skills, and
          push boundaries in the ever-evolving world of web development. Whether
          it's optimizing user interfaces or solving complex coding challenges,
          I love turning ideas into reality through clean, efficient code.
        </p>
        <p>
          In my free time, I enjoy playing video games and spending time with my
          family and friends.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
