import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css';

const rotateArrow = () => {
  var arrow = document.querySelector("#arrow-Sidebar")
}

function Sidebar() {
  return (
    <div className="Sidebar-wrapper">
      <div></div>
      <button className="Toggle-sidebar" onClick={rotateArrow}><FontAwesomeIcon id="arrow-Sidebar" className="Arrow-sidebar" icon={faChevronLeft}/></button>
    </div>
  );
}

export default Sidebar;
