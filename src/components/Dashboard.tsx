import React from 'react';
import './Page.css';
import TimerDetails from './details/TimerDetails'
import ProjectsDetails from './details/ProjectsDetails'


function Dashboard(props:any) {
  return (
    <div className={`page-wrapper ${props.activeId === "Dashboard"? 'active': 'inactive'}`}>
      <div className="dash-top-wrapper">
        <div className="timer-details-wrapper">
          <TimerDetails />
        </div>
        <div className="projects-details-wrapper">
          <ProjectsDetails />
        </div>
      </div>
      <div className="dash-mid-wrapper">
          <div></div>
      </div>
      <div className="dash-bottom-wrapper">

      </div>
    </div>
  );
}

export default Dashboard;
