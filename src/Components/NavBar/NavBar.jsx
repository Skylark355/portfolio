import React from "react";
import "./NavBar.css";
import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import logoImage from "../../assets/images/logoImage.png";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


    // Close menu when a nav item is clicked
    const closeMenu = () => {
      setIsOpen(false);
    };

  return (
    <div className="navbar">
      <div className="logo">
       <a href="#"> <img src={logoImage} alt="" /></a>
       <a href="#"><h1>Skylark Chris</h1></a>
      </div>

         {/* Hamburger Icon */}
         <div className="hamburger" onClick={toggleMenu}>
         {isOpen ? <FaTimes /> : <FaBars />} {/* Change icon dynamically */}
       </div>

      <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
        <a
          href="#"
          className={menu === "home" ? "active" : ""}
          onClick={() => {
            setMenu("home");
            closeMenu()
          }}
          // onClick={() => setMenu("home")}
        >

          Home
        </a>

        <a
          href="#experience"
          className={menu === "experience" ? "active" : ""}
          onClick={() => {
            setMenu("experience")
            closeMenu()
          }}
        >
          Experience
        </a>

        <a
          href="#skills"
          className={menu === "skills" ? "active" : ""}
          onClick={() => {
            setMenu("skills")
            closeMenu()
          }}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={menu === "projects" ? "active" : ""}
          onClick={() => {
            setMenu("projects")
            closeMenu()
          }}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={menu === "contact" ? "active" : ""}
          onClick={() => {
            setMenu("contact")
            closeMenu()
          }}
        >
          Contact
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
