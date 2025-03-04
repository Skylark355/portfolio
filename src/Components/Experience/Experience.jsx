import React from "react";
import "./Experience.css";
import { experiences } from "../../Constants";

const Experience = () => {
  return (
    <div className="experience" id="experience">
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
              <div key={id} className="experiences-item">
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
