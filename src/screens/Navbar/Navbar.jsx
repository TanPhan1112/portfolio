import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import menuButton from "./menu-navigation.svg";

function Navbar() {
  const [showButton, setShowButton] = useState(false);
  const [showLinks, setShowLinks] = useState(true);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowButton(true);
        setShowLinks(false);
      } else {
        setShowButton(false);
        setShowLinks(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-name">
        <div>Duc Minh Tan Phan</div>
        {showButton && (
          <img src={menuButton} alt="menuBtn" onClick={handleClick} />
        )}
      </div>
      {showLinks && (
        <div className="navbar-links-container">
          <a href="#home">Home</a>
          <a href="#aboutme">About Me</a>
          <a href="#technologies">Technologies</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
