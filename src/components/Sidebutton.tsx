import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebutton.css';
import { useState } from 'react'

function Sidebutton(props:any) {
  return (
    <button className={`button-slide slide-right ${props.name === "Dashboard"? 'active-side-button': ''}`}onClick={() => props.setActiveId(props.name)} > <FontAwesomeIcon icon={props.icon}/> {String(props.name)} </button>
  );
}

export default Sidebutton;