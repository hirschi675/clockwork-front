import React from 'react';
import './Page.css';


function Settings(props:any) {
  return (
    <div className={`page-wrapper ${props.activeId === "Settings"? 'active': 'inactive'}`}>
      <div>Settings</div>
    </div>
  );
}

export default Settings;
