import React from 'react';
import '../styles/Partners.css';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { id: 1, logo: '/assets/hackclub.png', alt: 'Partner 1' },
  ];

  return (
    <section className="partners-section" id="partners">
      <h1 className="partners-title">Our Partners</h1>
      <div className="partners-container">
        {partners.map((partner) => (
          <motion.div
            className="partner-box"
            key={partner.id}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={partner.logo} alt={partner.alt} className="partner-logo" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
