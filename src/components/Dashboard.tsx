import React from 'react';
import './Dashboard.css';


function Dashboard(props:any) {
  return (
    <div className={`Dashboard-wrapper ${props.rotate == true? 'closed-bar': 'open-bar'}`}>
      <div>Testing Dashboard</div>
    </div>
  );
}

export default Dashboard;
