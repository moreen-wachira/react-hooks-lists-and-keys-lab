import React from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';

const App = () => {
  const navLinks = ['Home', 'About', 'Contact'];
  
  const projects = [
    { id: 1, technologies: ['React', 'Node.js'] },
    { id: 2, technologies: ['Angular', 'Express'] },
    // Add more projects as needed
  ];

  return (
    <div>
      <NavBar links={navLinks} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
