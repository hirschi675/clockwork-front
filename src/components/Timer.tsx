import React from 'react';
import './Page.css';


function Timer(props:any) {
  return (
    <div className={`page-wrapper ${props.activeId === "Timer"? 'active': 'inactive'}`}>
        <div className="projects-details-wrapper">
        {props.TimerDetails}
        </div>
    </div>
  );
}

export default Timer;
