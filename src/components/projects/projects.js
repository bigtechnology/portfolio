import React from "react";

function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects">
        <a
          className="project p1"
          target="blank"
          href="https://contest.storysquad.app/"
        >
          <div className="view">{/* view */}</div>
        </a>

        <a
          href="https://cristian-garcia-official.vercel.app/"
          target="blank"
          className="project p2"
        >
          <div className="view">{/* view */}</div>
        </a>

        <a
          className="project p3"
          target="blank"
          href="https://www.foundergrants.com/"
        >
          <div className="view">{/* view */}</div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
