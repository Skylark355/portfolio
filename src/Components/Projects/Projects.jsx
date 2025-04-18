import React, { useEffect } from "react";
import "./Projects.css";
import { projects } from "../../Constants";
import "aos/dist/aos.css";
import AOS from "aos";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
      delay: 200,
    });
  });

  return (
    <div className="projects" id="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>

      <div className="project">
        <div className="project-left">
          {projects.map((pro, id) => {
            return (
              <div
                key={id}
                className="projects-all"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="project-left">
                  <a href={pro.liveLink} target="_blank">
                    <img src={pro.image} alt="" />
                  </a>
                </div>

                <div className="project-right">
                  <h1>{pro.title}</h1>
                  <div className="project-right-images">
                    <a href={pro.liveLink} target="_blank">
                      <img src={pro.live} alt="Live Link" />
                    </a>
                    <a href={pro.githubLink} target="_blank">
                      <img src={pro.github} alt="GitHub Link" />
                    </a>
                  </div>

                  <p>{pro.description}</p>

                  {/* Dynamically render stacks */}
                  <div className="stack">
                    {pro.stacks?.map((stack, index) => (
                      <div className="stack1" key={index}>
                        <img src={stack.image} alt={stack.name} />
                        <span>{stack.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
