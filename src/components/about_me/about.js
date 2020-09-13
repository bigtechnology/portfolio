import React from "react";
import "./about.css"
import p1 from '../../images/project1.png'

function About() {
    return (
        <div className="about-wrapper">
            <div className="about about-top-content">
                <div
                    className="intro">
                    <h1>about me</h1>
                    <h4> I am a freelance web developer based out of San Francisco, CA.</h4>
                    <p>
                    I enjoy solving problems and making life easier through technology. When I'm not coding, you'll find me cooking, gardening or working out.
                    </p>
             </div>
            </div>

            <div className="projects-wrapper">

                <div className="projects">
                    <a className="project p1" target="blank" href="https://word-bank-fe.vercel.app/">
                        <div >
                        </div>
                    </a>

                    <a className="project p2" href="https://www.foundergrants.com/">
                    <div>
                    
                    </div>
                    </a>
                    <a href="https://objective-carson-d52209.netlify.app/" className="project p3">
                    <div>
                    </div>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default About;