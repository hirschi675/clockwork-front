import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faClock, faFolder, faStopwatch20, faPerson, faPaperclip, faCog } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css';
import Sidebutton from './Sidebutton';



function Sidebar(props:any) {
  return (
    <div className={`sidebar-wrapper ${props.rotate == true? 'closed-bar': 'open-bar'}`}>
      <button className="toggle-sidebar" onClick={props.rotateArrow}>
        <FontAwesomeIcon id="arrow-Sidebar" className={`arrow-sidebar ${props.rotate == true? 'rotate-right': 'rotate-left'}`} icon={faChevronLeft}/>
      </button>
      <div className="sidebar-top-wrapper">
        <div className="sidebar-words"> <FontAwesomeIcon icon={faClock}/>  Clock <span style={{color: '#8ACB88'}}>Work</span></div>
      </div>
      <div className="sidebar-bottom-wrapper">
        <Sidebutton name="Dashboard" icon={faClock} />
        <Sidebutton name="Timer" icon={faStopwatch20} />
        <Sidebutton name="Projects" icon={faFolder}  />
        <Sidebutton name="Team" icon={faPerson}  />
        <Sidebutton name="Reports" icon={faPaperclip} />
        <Sidebutton name="Settings" icon={faCog} />
      </div>
    </div>
  );
}

export default Sidebar;
