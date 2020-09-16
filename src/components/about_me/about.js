import React from "react";
import "./about.css"
import "../projects/projects.css"

import Projects from "../projects/projects";

function About() {
    return (
        <div className="about-wrapper">

                <div className="about-content">
                    <h1 className="intro-title"
                    >about me</h1>
                    <h4 className="about-h4"
                    > I am a freelance web developer based out of San Francisco, CA.</h4>
                    <p className="about-para">
                    I enjoy solving problems and making life easier through technology. When I'm not coding, you'll find me cooking, gardening or working out.
                    </p>
                </div>

            <div className="project-wrapper">
            <Projects/>
            </div>
        </div>
    )
}

export default About;