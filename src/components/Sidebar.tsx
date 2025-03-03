import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faClock, faFolder, faStopwatch20, faPerson, faPaperclip, faCog } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css';
import Sidebutton from './Sidebutton';
import { useState } from 'react';



function Sidebar(props:any) {
const [hover, SetHover] = useState(false)
const toggleHover = () => {
  SetHover(!hover)
}
  return (
    <div className={`sidebar-wrapper ${props.rotate == true? 'closed-bar': 'open-bar'}`}>
      <button className={`toggle-sidebar ${props.rotate == true? '': 'toggle-sidebar-hover'}`} onClick={props.rotateArrow} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <FontAwesomeIcon id="arrow-Sidebar" className={`arrow-sidebar ${props.rotate == true? 'rotate-right': 'rotate-left'}`} icon={faChevronLeft}/>
      </button>
      <div className="sidebar-top-wrapper">
        <div className="sidebar-words"><FontAwesomeIcon icon={faClock}/>  Clock <span style={{color: '#8ACB88'}}>Work</span></div>
       <a href="#" className="username">Logan Hirschi</a>
      </div>
      <div className="sidebar-bottom-wrapper">
        <Sidebutton name="Dashboard" icon={faClock} setActiveId={props.setActiveId} />
        <Sidebutton name="Timer" icon={faStopwatch20} setActiveId={props.setActiveId} />
        <Sidebutton name="Projects" icon={faFolder} setActiveId={props.setActiveId}  />
        <Sidebutton name="Team" icon={faPerson} setActiveId={props.setActiveId}  />
        <Sidebutton name="Reports" icon={faPaperclip} setActiveId={props.setActiveId} />
        <Sidebutton name="Settings" icon={faCog} setActiveId={props.setActiveId} />
      </div>
    </div>
  );
}

export default Sidebar;
