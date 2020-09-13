import React from "react";
import "./Nav.css"

function Nav() {
    return (
        <div className="nav-wrapper">
            <nav className="nav">
                <a className="about" href="/about">about</a>
                <ul className="social-links">
                    <a href="mailto:big-technology@outlook.com">
                    <li className="social-link mail">
                    </li>
                    </a>
                    
                    <li className="social-link twitter" ></li>
                    <li className="social-link linkedin" ></li>
                    <li className="social-link github" ></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;