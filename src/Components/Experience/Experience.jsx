import React, { useEffect } from "react";
import "./Experience.css";
import { experiences } from "../../Constants";
import "aos/dist/aos.css";
import AOS from "aos";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
      delay: 200,
    });
  });

  return (
    <div
      className="experience"
      id="experience"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="experience-top">
        <div className="empty"></div>
        <h1 className="title">Experience</h1>
        <button className="resume">
          <span className="download-arrow">⬇</span>{" "}
          <span className="download-text">Download Resume</span>
        </button>
      </div>

      <div className="experience-bottom">
        <div className="experiences">
          {experiences.map((exp, id) => {
            return (
              <div
                key={id}
                className="experiences-item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="dot"></div>
                <div className="contents">
                  <h1>{exp.title}</h1>
                  <p className="date">{exp.date}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
