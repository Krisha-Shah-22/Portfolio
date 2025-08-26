import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, description, image, liveUrl, githubUrl } = project;

  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <div className="project-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="live-demo-button">
            Live Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-button">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;