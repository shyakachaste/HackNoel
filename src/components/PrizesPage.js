import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaLightbulb } from 'react-icons/fa';
import '../styles/PrizePage.css';

const PrizeBox = ({ title, icon, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`prize-box ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      initial={{ rotateY: 0, scale: 1 }}
      whileHover={{ rotateY: 10, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="prize-header">
        <div className="prize-icon">{icon}</div>
        <h2>{title}</h2>
      </div>
      <motion.div
        className={`prize-details ${isOpen ? 'show' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.5 }}
      >
        {details}
      </motion.div>
    </motion.div>
  );
};

const PrizesPage = () => {
  const prizes = [
    {
      title: '1st Place',
      icon: <FaTrophy />,
      details: 'Check back soon to find out what exciting rewards are in store for HackNoel 2024 participants!',
    },
    {
      title: '2nd Place',
      icon: <FaMedal />,
      details: 'Check back soon to find out what exciting rewards are in store for HackNoel 2024 participants!',
    },
    {
      title: '3rd Place',
      icon: <FaStar />,
      details: 'Check back soon to find out what exciting rewards are in store for HackNoel 2024 participants!',
    },
    {
      title: 'Best Idea',
      icon: <FaLightbulb />,
      details: 'Check back soon to find out what exciting rewards are in store for HackNoel 2024 participants!',
    },
  ];

  return (
    <section className="prizes-page">
      <h1 className="prizes-title">Prizes</h1>
      <div className="prizes-container">
        {prizes.map((prize, index) => (
          <PrizeBox key={index} title={prize.title} icon={prize.icon} details={prize.details} />
        ))}
      </div>
    </section>
  );
};

export default PrizesPage;
