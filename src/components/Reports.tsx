import React from 'react';
import './Page.css';


function Reports(props:any) {
  return (
    <div className={`page-wrapper ${props.activeId === "Reports"? 'active': 'inactive'}`}>
      <div>Reports</div>
    </div>
  );
}

export default Reports;
