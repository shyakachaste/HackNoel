import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/TeamSection.css';

const teamMembers = [
  {
        name: 'Shyaka Chaste',
        title: 'Founder & Lead Organizer',
        imgSrc: 'assets/chaste.jpg',
        linkedin: 'https://www.linkedin.com/in/shyaka-chaste-982a32272/',
  },

  {
    name: 'Marius Kevin Ikuzwe',
    title: 'Project Manager',
    imgSrc: 'assets/marius.jpg',
    linkedin: 'https://www.linkedin.com/in/marius-kevin-ikuzwe',
  },

  {
    name: 'Paulin Shema',
    title: 'Technical Support & Marketing',
    imgSrc: 'assets/shema.jpg',
    linkedin: 'https://www.linkedin.com/in/paulin-shema',
  },

  {
    name: 'Caleb Tola',
    title: 'Marketing coordinator',
    imgSrc: 'assets/caleb.jpg',
    linkedin: 'https://www.linkedin.com/in/caleb-tola-b75b63328/',
  },
];

const TeamSection = () => {
  return (
    <section className="team-section" id="team">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.imgSrc} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
              <FaLinkedin />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
