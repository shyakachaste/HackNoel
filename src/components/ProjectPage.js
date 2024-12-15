import React from 'react';
import '../styles/ProjectPage.css';
import { FaGithub } from 'react-icons/fa';
import Footer from './Footer';

const projects = [
  {
    teamName: 'Team Name',
    image: 'https://via.placeholder.com/300x200',
    githubLink: 'https://github.com/example',
    liveLink: 'https://example.com',
  },
  {
    teamName: 'Team Name',
    image: 'https://via.placeholder.com/300x200',
    githubLink: 'https://github.com/example2',
    liveLink: 'https://example2.com',
  },

  {
    teamName: 'Team Name',
    image: 'https://via.placeholder.com/300x200',
    githubLink: 'https://github.com/example2',
    liveLink: 'https://example2.com',
  },

  {
    teamName: 'Team Name',
    image: 'https://via.placeholder.com/300x200',
    githubLink: 'https://github.com/example2',
    liveLink: 'https://example2.com',
  },

  {
    teamName: 'Team Name',
    image: 'https://via.placeholder.com/300x200',
    githubLink: 'https://github.com/example2',
    liveLink: 'https://example2.com',
  },

  {
    teamName: 'Team Name',
    image: 'https://via.placeholder.com/300x200',
    githubLink: 'https://github.com/example2',
    liveLink: 'https://example2.com',
  },

  {
    teamName: 'Team Name',
    image: 'https://via.placeholder.com/300x200',
    githubLink: 'https://github.com/example2',
    liveLink: 'https://example2.com',
  },

  {
    teamName: 'Team Name',
    image: 'https://via.placeholder.com/300x200',
    githubLink: 'https://github.com/example2',
    liveLink: 'https://example2.com',
  },
];

const ProjectPage = () => {
  return (
    <div className="project-page">
      <h1>HackNoel 2024</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={`${project.teamName} project`} />
            <h2>{project.teamName}</h2>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-btn">
                <FaGithub /> GitHub
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-btn">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
       <br />
      <Footer />
    </div>
  );
};

export default ProjectPage;