import React from "react";
import "./about.css"
import "../projects/projects.css"

import Projects from "../projects/projects";

function About() {
    return (
        <div className="about-wrapper">
            <div className="about about-top-content">
                <div
                    className="intro">
                    <h1 className="intro-title"
                    >about me</h1>
                    <h4 className="intro"
                    > I am a freelance web developer based out of San Francisco, CA.</h4>
                    <p className="intro">
                    I enjoy solving problems and making life easier through technology. When I'm not coding, you'll find me cooking, gardening or working out.
                    </p>
             </div>
            </div>
            <Projects/>
        </div>
    )
}

export default About;