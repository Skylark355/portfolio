import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="#hero">
      <h1 className="title">
        Hello{" "}
        <span style={{ fontSize: "3.5rem" }} className="wave">
          👋
        </span>
      </h1>
      <h1 className="name">
        I'm <span>Christopher Adzesi</span> a Frontend Developer.
      </h1>
      <p>
        I create clean, modern, and fully responsive websites that blend
        seamless design with functionality.
      </p>
      <div className="hero-cta">
        <a href="#projects">
          <button className="myProjects">
            <span className="plane">✈</span>
            <span className="text">My Projects</span>
          </button>
        </a>
        <a href="#experience">
          <button className="myExperience">
            Experience <span className="arrow">→</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
