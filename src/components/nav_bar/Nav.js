import React from "react";
import "./Nav.css"

function Nav() {
    return (
        <div className="nav-wrapper">
            <nav className="nav">
                <a className="about nav-links" href="/about">about</a>
                <ul className="social-links">
                    <a href="mailto:big-technology@outlook.com">
                    <li className="social-link mail">
                    </li>
                    </a>
                    
                    <a href="https://twitter.com/ben_i_griffin">
                    <li className="social-link twitter" ></li>
                    </a>

                    <a href="https://www.linkedin.com/in/b-griffinn/">
                    <li className="social-link linkedin" ></li>
                    </a>

                    <a href="https://github.com/B-Griffinn">
                    <li className="social-link github" ></li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;