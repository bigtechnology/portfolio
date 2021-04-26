import React from 'react';
// Html imports
import html from '../../../resources/images/html5.png';
import jsx from '../../../resources/images/react.png';

// Css Imports
import css3 from '../../../resources/images/css3.png';
import sass from '../../../resources/images/sass.png';
import materailize from '../../../resources/images/materialize.png';

// Javascript Imports
import javascript from '../../../resources/images/javascript.png';
import node from '../../../resources/images/nodejs.png';

// Back-end Imports
import python from '../../../resources/images/python.png';
import postgres from '../../../resources/images/postgresql.png';
import mongo from '../../../resources/images/mongodb.png';

// Other Imports
import github from '../../../resources/images/github.png';
import heroku from '../../../resources/images/heroku.png';


const Skills = () => {

  return (
    <div className="skills-container">
      <div className="header">
        <h2>Skills</h2>
      </div>

      <div className="skills-content">
                    
        <h2>Html</h2>
          <div className="skill">
                <div className="image-wrapper">
                    <img src={html} alt="skill one" />
                </div>
                <div className="image-wrapper">
                    <img src={jsx} alt="skill two" />
                </div>
          </div>

          <h2>Css</h2>
          <div className="skill">
            <div className="image-wrapper">
                <img src={css3} alt="skill two" />
            </div>
            <div className="image-wrapper">
                <img src={sass} alt="skill two" />
            </div>
            <div className="image-wrapper">
                <img src={materailize} alt="skill two" />
            </div>
          </div>

          <h2>Javascript</h2>
          <div className="skill">
            <div className="image-wrapper">
                <img src={jsx} alt="skill two" />
            </div>
            <div className="image-wrapper">
                <img src={javascript} alt="skill two" />
            </div>
            <div className="image-wrapper">
                <img src={node} alt="skill two" />
            </div>
          </div>

          <h2>Back-End</h2>
          <div className="skill">
          <div className="image-wrapper">
                <img src={python} alt="skill two" />
            </div>
            <div className="image-wrapper">
                <img src={postgres} alt="skill two" />
            </div>
            <div className="image-wrapper">
                <img src={mongo} alt="skill two" />
            </div>
          </div>

          <h2>Other</h2>
          <div className="skill">
            <div className="image-wrapper">
                <img src={github} alt="skill two" />
            </div>
            <div className="image-wrapper">
                <img src={heroku} alt="skill two" />
            </div>
          </div>

        </div>
    </div>
  );
};

export default Skills;

