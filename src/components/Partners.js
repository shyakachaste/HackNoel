import React from 'react';
import '../styles/Partners.css';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { id: 1, logo: '/assets/bktechouse.png', alt: 'BKTechouse' , link: 'https://www.bktechouse.rw/' },
    { id: 2, logo: '/assets/ldk.png', alt: 'Lycee de kigali' , link: 'https://lyceedekigali.ac.rw/' },
    { id: 3, logo: '/assets/REB.png', alt: 'REB' , link: 'https://www.reb.gov.rw/' },
    { id: 4, logo: '/assets/techinika.png', alt: 'Techinika' , link: 'https://techinika.co.rw/' },
    { id: 5, logo: '/assets/hackclub.png', alt: 'Hackclub' , link: 'https://hackclub.com' },
    { id: 6, logo: '/assets/codecrafters.png', alt: 'Codecrafters' , link: 'https://codecrafters.io/' },
    { id: 7, logo: '/assets/axure.png', alt: 'Axure' , link: 'https://www.axure.com/' },
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
            <a href={partner.link} target="_blank" rel="noopener noreferrer" className="partner_a">
              <img src={partner.logo} alt={partner.alt} className="partner-logo" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
