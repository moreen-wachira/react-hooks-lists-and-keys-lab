
import React from 'react';

const ProjectItem = ({ technologies }) => {
  return (
    <div>
      <h3>Project Title</h3>
      <p>Description of the project.</p>
      <h4>Technologies Used:</h4>
      <div>
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;