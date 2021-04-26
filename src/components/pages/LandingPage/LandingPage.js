import React from 'react';
import {  About, Projects, Skills } from '../../common';


const LandingPageContainer = () => {
  return (
    <div className="landing-page-container">
        <About />
        <Projects />
        <Skills />
    </div>
  );
};

export default LandingPageContainer;
