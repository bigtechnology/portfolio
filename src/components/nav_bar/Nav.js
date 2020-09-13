import React from "react";
import "./Nav.css"

function Nav() {
    return (
        <div className="nav-wrapper">
            <nav className="nav">
                <a className="about" href="/about">about</a>
                <ul className="social-links">
                    <li className="social-link mail">
                    </li>
                    <li className="social-link twitter" ></li>
                    <li className="social-link linkedin" ></li>
                    <li className="social-link github" ></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;