import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <ProjectCard title="Project 1" description="Description of Project 1" githubLink="https://github.com/project1" />
      <ProjectCard title="Project 2" description="Description of Project 2" githubLink="https://github.com/project2" />
      {/* Add more projects as needed */}
    </div>
  );
};

export default Portfolio;
