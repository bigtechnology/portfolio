import React from "react";
import "./about.css"
import "../projects/projects.css"

import Projects from "../projects/projects";

function About() {
    return (
        <div className="about-wrapper">

            <div className="about-content">

            <div className="left-content">
                <h1 className="profile">CRISTIAN GARCIA</h1>
                <h4 className="profile-h4" >NASM CERTIFIED PERSONAL TRAINER</h4>
            </div>

                <div className="middle-content">
                    <h1 className="intro-title"
                    >about me</h1>
                    <h4 className="about-h4"
                    > I am a freelance NASM certified Personal Trainer.</h4>
                    <p className="about-para">
                    I enjoy helping others achieve their goals through fitness. 
                    My goal is to help others discover the power that hard work, dedication and persistance can achieve. 
                    </p>
                </div>

            <div className="right-content">
            </div>

            </div>

            <div className="project-wrapper">
            <Projects/>
            </div>
        </div>
    )
}

export default About;