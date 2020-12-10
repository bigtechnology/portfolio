import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/bigtechnologyinc/"
              target="blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://www.linkedin.com/in/b-griffinn/"
              target="blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>

            <a
              className="social-icon-link youtube"
              href="mailto:big-technology@outlook.com"
              target="blank"
              aria-label="Envelope"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
        <div className="developer-wrapper">
          <a className="a-tag-developer" href="/">
            <small className="website-rights">Created By Ben Griffin</small>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
