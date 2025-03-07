import React from "react";
import "./WhatIBring.css";
import { skills } from "../../Constants";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const WhatIBring = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
      delay: 200,
    });
  });

  return (
    <div className="skills" id="skills">
      <div className="skills-top" data-aos="fade-up" data-aos-duration="1500">
        <h1>What I Bring to the Table</h1>
        <h3>FrontEnd</h3>
      </div>

      <div
        className="skills-bottom"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="skill">
          {skills.map((sk, id) => {
            return (
              <div key={id} className="skill">
                <div className="skill-style">
                  <img src={sk.image} alt="" />
                  <h2>{sk.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIBring;
