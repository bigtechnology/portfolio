import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { useHistory } from 'react-router';

const Footer = () => {
  const { push } = useHistory();
  const goToDashboard = () => push(`/`);

  return (
    <footer className="footer-wrapper">
      <div className="contact-us">
        <h3 onClick={goToDashboard}>Ben Griffin</h3>
        {/* <p>physical address</p>
        <p>Suite #</p> */}
        <p>San Francisco, CA</p>
        {/* <p>Phone Number</p> */}
        {/* <p>Hours of Operation</p> */}
      </div>

      <div className="customer-service">
        <h3>Customer Service</h3>
        {/* <p>Phone Number</p> */}
        <p>
          <a href="mailto:renegade_salon@yahoo.com">Contact Us</a>
        </p>
        {/* <a
          className="instagram-icon"
          href="https://www.instagram.com/renegade_salon/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a> */}
      </div>
      {/* <div className="copy-rights">
        <p> Ben Griffin </p>
      </div> */}
    </footer>
  );
};

export default Footer;