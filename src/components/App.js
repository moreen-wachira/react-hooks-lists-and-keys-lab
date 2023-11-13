import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';

const projectsData = [
  {
    id: 1,
    technologies: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: 2,
    technologies: ['Node.js', 'Express', 'MongoDB'],
  },
  // Add more projects as needed
];

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projectsData} />
    </div>
  );
};

export default App;