import React from 'react';
import './Page.css';


function Reports(props:any) {
  return (
    <div className={`page-wrapper ${props.rotate == true? 'closed-bar': 'open-bar'} ${props.activeId === "Reports"? 'active': 'inactive'}`}>
      <div>Reports</div>
    </div>
  );
}

export default Reports;
