import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutPage.css';
import { FaGift } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <section className="about-page" id="about">
      <motion.div 
        className="about-decor"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <FaGift className="decor-icon" />
      </motion.div>

      <motion.h1 
        className="about-title"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About HackNoel
      </motion.h1>
      <motion.p 
        className="about-paragraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
       HackNoel is an end-of-year hackathon with a Christmas theme, specifically for high school students. Happening on December 27, 2024, this event invites young innovators to use technology to solve real problems in Rwanda, developing web apps, mobile apps, or chatbots to tackle challenges in healthcare, education, and community services.
      </motion.p>
      <motion.p 
        className="about-paragraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        It’s a fun and meaningful way to end the year while learning, building, and making a positive impact in Rwanda!
        </motion.p>
      
    </section>
  );
};

export default AboutPage;
