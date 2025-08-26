import React from 'react';
import ProjectCard from './ProjectCard';

// This is where you'll define your project data
const projectsData = [
  {
    id: 1,
    name: 'Project 1 Name',
    description: 'A brief description of your first project. Talk about its purpose and what technologies you used. For example, "A full-stack e-commerce site built with MERN stack."',
    image: '/images/project1-image.png', // Placeholder image path
    liveUrl: 'https://project1-live-demo.com',
    githubUrl: 'https://github.com/your-username/project1',
  },
  {
    id: 2,
    name: 'Project 2 Name',
    description: 'Describe your second project here. What problem did it solve? What were the key features?',
    image: '/images/project2-image.png',
    liveUrl: 'https://project2-live-demo.com',
    githubUrl: 'https://github.com/your-username/project2',
  },
  // Add more projects here
];

// Crucial Step: You need to replace 
// the placeholder data in projectsData
//  with your real projects.
//  Also, you'll need to create a folder 
// called images inside the public folder 
// and place your project screenshots there,
//  then update the image paths.
const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;