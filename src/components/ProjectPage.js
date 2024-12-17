import React from 'react';
import '../styles/ProjectPage.css';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    teamName: 'Team Innovators',
    image: 'https://via.placeholder.com/800x500',
    githubLink: 'https://github.com/example',
    liveLink: 'https://example.com',
    id: 1,
  },
  {
    teamName: 'Team Pioneers',
    image: 'https://via.placeholder.com/800x500',
    githubLink: 'https://github.com/example2',
    liveLink: 'https://example2.com',
    id: 2,
  },
  {
    teamName: 'Team Visionaries',
    image: 'https://via.placeholder.com/800x500',
    githubLink: 'https://github.com/example3',
    liveLink: 'https://example3.com',
    id: 3,
  },
];

const ProjectPage = () => {
  const navigate = useNavigate();

  const handleImageClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="project-page">
      <h1>HackNoel 2024</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={`${project.teamName} project`}
              onClick={() => handleImageClick(project.id)}
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
