import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="#hero">
      <h1>
        Hello{" "}
        <span style={{ fontSize: "3.5rem" }} className="wave">
          👋
        </span>
      </h1>
      <h1>
        I'm <span>Skylark Chris,</span> a Frontend Developer.
      </h1>
      <p>
        I create clean, modern, and fully responsive websites that blend
        seamless design with functionality.
      </p>
      <div className="hero-cta">
        <button className="myProjects">
          <span className="plane">✈</span>
          <span className="text">My Projects</span>
        </button>
        <button className="myExperience">
          Experience <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
