import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import './style.css'; // Estilização
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SocialIcons from '../../components/SocialIcons';

const Contact = () => {
  return (
    <>
    <Header/>
    <SocialIcons/>
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
    </div>
    <Footer/>
    </>
  );
};

export default Contact
