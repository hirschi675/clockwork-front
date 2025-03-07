import React from 'react';
import './Page.css';
import TeamDetails from './details/TeamDetails';


function Dashboard(props:any) {
  return (
    <div className={`page-wrapper ${props.activeId === "Team"? 'active': 'inactive'}`}>
      <TeamDetails />
    </div>
  );
}

export default Dashboard;
