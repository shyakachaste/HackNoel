import React from 'react';
import { FaDiscord, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
      <p className="footer-text">
      Youth Code Camp is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499). Copyright © 2024.
      </p>
    </footer>
  );
};

export default Footer;