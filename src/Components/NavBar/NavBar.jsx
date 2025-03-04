import React from "react";
import "./NavBar.css";
import { useState } from "react";
import logoImage from "../../assets/images/logoImage.png";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoImage} alt="" />
        <h1>Skylark Chris</h1>
      </div>

      <ul className="nav-menu">
        <a
          href="#home"
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >

          Home
        </a>

        <a
          href="#experience"
          className={menu === "experience" ? "active" : ""}
          onClick={() => setMenu("experience")}
        >
          Experience
        </a>

        <a
          href="#skills"
          className={menu === "skills" ? "active" : ""}
          onClick={() => setMenu("skills")}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={menu === "projects" ? "active" : ""}
          onClick={() => setMenu("projects")}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={menu === "contact" ? "active" : ""}
          onClick={() => setMenu("contact")}
        >
          Contact
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
