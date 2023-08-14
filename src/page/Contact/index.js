import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import './style.css'; // Estilização
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contacts">
      <h2>Entre em Contato</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>+55 (41) 456-7890</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>duoecotech@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarker className="contact-icon" />
          <p>Curitiba-PR</p>
        </div>
      </div>
        <div className='redes'>
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

export default Contact
