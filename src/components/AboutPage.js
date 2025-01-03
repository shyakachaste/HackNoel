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
       HackNoel is an end-of-year hackathon hosted by Youth Code Camp, a coding club within Hack Club. It brings together students from high schools across different communities. These students work on their projects, creating web apps, mobile apps, chatbots, and solutions involving IoT and AI to address challenges in healthcare, education, and community services.
      </motion.p>
      <motion.p 
        className="about-paragraph"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        It’s a fun and meaningful way to end the year while learning and building</motion.p>
      
    </section>
  );
};

export default AboutPage;
