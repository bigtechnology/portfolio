import React from 'react';

const Projects = () => {

  return (
    <div className="projects-container">
      <div className="header">
        <h2>Projects</h2>
      </div>

      <div className="projects-content">

        {/* <div className="video-wrapper">
          <div title="" className="item-1"></div>
        </div> */}

        <div className="images-wrapper">
          {/* <div className="header">
            <h2>Testimonials</h2>
          </div> */}
          
          <a className="item-1" href="https://contest.storysquad.app/" target="_blank" rel="noopener noreferrer">
          <div title="" ></div>
          </a>

          <a className="item-2" href="https://contest.storysquad.app/" target="_blank" rel="noopener noreferrer">
          <div title="" ></div>
          </a>

          <a className="item-3" href="https://blissful-lalande-b962e6.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div title="" ></div>
          </a>

          {/* <div title="" className="item-4"></div>
          <div title="" className="item-5"></div>
          <div title="" className="item-6"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;


// const onClick = (item) => {
//   if (item === 'item1') {
//     window.open('https://contest.storysquad.app/')
//   } else if (item === 'item2') {
//     window.open('https://rumble.storysquad.app/')
//   } else if (item === 'item3') {
//     window.open('https://blissful-lalande-b962e6.netlify.app/')
//   }
// }