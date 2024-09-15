import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTree } from 'react-icons/fa'; 
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaTree className="christmas-tree-icon" />
        <h1>Hack<span>Noel</span></h1>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#register">Register</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={handleToggle}>
        <motion.div 
          className="bar"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
        />
        <motion.div 
          className="bar"
          animate={{ opacity: isOpen ? 0 : 1 }}
        />
        <motion.div 
          className="bar"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
