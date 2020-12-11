import React from "react";
import "./about.css";
import "../projects/projects.css";

import Projects from "../projects/projects";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <div className="left-content">
          <h1 className="header-name">BEN GRIFFIN</h1>
          <h4 className="profile-h4">Full Stack Web Engineer</h4>
        </div>

        <div className="middle-content">
          <h1 className="middle-title">about me</h1>
          <p className="middle-para">
            I am a freelance web developer based out of San Francisco, CA. I
            enjoy solving problems and making peopl'es lives easier through
            technology. When I'm not coding, you'll find me cooking, reading or
            exercising.
          </p>
        </div>

        <div className="right-content"></div>
      </div>

      <div className="project-wrapper">
        <Projects />
      </div>
    </div>
  );
}

export default About;
