import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './style.css'

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <p className="icons">duoecotec@gmail.com</p>
      <div className="icon-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/duoecotech/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/duoecotech/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;