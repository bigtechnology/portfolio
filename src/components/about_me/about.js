import React from "react";
import "./about.css";
import "../projects/projects.css";

import Projects from "../projects/projects";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <div className="left-content">
          <h1 className="profile">BEN GRIFFIN</h1>
          <h4 className="profile-h4">front end engineer</h4>
        </div>

        <div className="middle-content">
          <h1 className="intro-title">about me</h1>
          <p className="about-para">
            I am a freelance web developer based out of San Francisco, CA. I
            enjoy solving problems and making life easier through technology.
            When I'm not coding, you'll find me cooking, gardening or working
            out.
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
