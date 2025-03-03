import React from 'react';
import './Page.css';


function Dashboard(props:any) {
  return (
    <div className={`page-wrapper ${props.rotate == true? 'closed-bar': 'open-bar'} ${props.activeId === "Team"? 'active': 'inactive'}`}>
      <div>Team</div>
    </div>
  );
}

export default Dashboard;
