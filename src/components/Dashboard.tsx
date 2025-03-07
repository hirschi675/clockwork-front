import React from 'react';
import './Page.css';
import TeamDetails from './details/TeamDetails';
import ProjectsDetails from './details/ProjectsDetails'
import ReportDetails from './details/ReportDetails'


function Dashboard(props:any) {
  return (
    <div className={`page-wrapper ${props.activeId === "Dashboard"? 'active': 'inactive'}`}>
      <div className="dash-wrapper">
        <div className="main-details-wrapper">
          {props.TimerDetails}
        </div>
        <div className="main-details-wrapper">
          <ProjectsDetails />
        </div>
      </div>
      <div className="dash-wrapper">
          <div className="main-details-wrapper">
            <TeamDetails />
          </div>
      </div>
      <div className="dash-wrapper">
          <div className="main-details-wrapper">
            <ReportDetails />
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
