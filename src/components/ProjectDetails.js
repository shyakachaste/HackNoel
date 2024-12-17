import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetails.css';

const projectDetails = {
  1: {
    teamName: 'Team Innovators',
    description: 'This project focuses on improving education using technology.',
    images: [
      'https://via.placeholder.com/800x500',
      'https://via.placeholder.com/800x500',
    ],
  },
  2: {
    teamName: 'Team Pioneers',
    description: 'A health app providing real-time updates to patients and doctors.',
    images: [
      'https://via.placeholder.com/800x500',
      'https://via.placeholder.com/800x500',
    ],
  },
  3: {
    teamName: 'Team Visionaries',
    description: 'An IoT solution to monitor community services in real-time.',
    images: [
      'https://via.placeholder.com/800x500',
      'https://via.placeholder.com/800x500',
    ],
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.teamName}</h1>
      <p>{project.description}</p>
      <div className="details-images">
        {project.images.map((img, index) => (
          <img key={index} src={img} alt={`Project ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
