import React from "react";
import "./LandingPage.css";
import "../../Components/NavBar/NavBar";
import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/Hero/Hero";
import Experience from "../../Components/Experience/Experience";
import WhatIBring from "../../Components/WhatIBring/WhatIBring";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Experience />
      <WhatIBring />
      <Projects />
      <Footer />
    </div>
  );
};

export default LandingPage;
