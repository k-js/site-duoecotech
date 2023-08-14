import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './style.css'; // Estilização

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons-footer">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://www.instagram.com/duoecotech/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.facebook.com/duoecotech/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
      </div>
      <p>Siga-nos nas redes sociais para mais atualizações!</p>
    </div>
  );
};

export default Footer;
