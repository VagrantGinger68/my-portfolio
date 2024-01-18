import React from 'react';

const ProjectCard = ({ title, description, githubLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
};

export default ProjectCard;
