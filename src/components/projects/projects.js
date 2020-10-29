import React from "react";
import p1 from '../../images/project1.png'

function Projects() {
    return (
<div className="projects-wrapper">

<div className="projects">
    <a className="project p1" target="blank" href="https://contest.storysquad.app/">
        <div className="view">
            {/* view */}
        </div>
    </a>
    <a href="https://cristian-garcia-official.vercel.app/" 
    target="blank"className="project p3">
        <div className="view">
            {/* view */}
        </div>
        </a>
    <a className="project p2"
    target="blank" href="https://www.foundergrants.com/">
        <div className="view">
            {/* view */}
        </div>
    </a>
</div>
</div>
    )
}

export default Projects;
