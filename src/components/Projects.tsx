import React from 'react';
import './Page.css';


function Projects(props:any) {
  return (
    <div className={`page-wrapper ${props.rotate == true? 'closed-bar': 'open-bar'} ${props.activeId === "Projects"? 'active': 'inactive'}`}>
      <div>Projects</div>
    </div>
  );
}

export default Projects;
