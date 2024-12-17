import React from 'react';
import '../styles/ProjectPage.css';
import { FaGithub } from 'react-icons/fa';


const projects = [
  {
    teamName: 'Crop Guard',
    image: '/assets/projects/crop guard.jpg',
    githubLink: 'https://github.com',
    liveLink: 'https://crop-guard.vercel.app/',
    id: 1,
  },
];

const ProjectPage = () => {

  return (
    <div className="project-page">
      <h1>HackNoel 2024</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={`${project.teamName} project`}
              className="clickable-image"
            />
            <h2>{project.teamName}</h2>
            <div className="project-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
