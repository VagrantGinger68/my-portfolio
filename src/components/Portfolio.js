import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <ProjectCard title="MovieMate" description="Explore a vast movie library and join movie-specific chat rooms to connect with fellow
      film enthusiasts, sharing your thoughts, reviews, and recommendations in real time."
        githubLink="https://github.com/VagrantGinger68/MovieMate" />

      <ProjectCard title="Decision Maker" description="Decision Maker allows a user to create a poll and send it to their friends to help make
decisions.
" githubLink="https://github.com/VagrantGinger68/Decision-Maker_Midterm-Project" />
      {/* Add more projects as needed */}
    </div>
  );
};

export default Portfolio;
