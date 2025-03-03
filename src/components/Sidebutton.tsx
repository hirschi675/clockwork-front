import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebutton.css';

function Sidebutton(props:any) {
  const activateLink = () => {
    console.log("CLICKING")
  }
  return (
    <button onClick={activateLink} className="button_slide slide_right"> <FontAwesomeIcon icon={props.icon}/> {props.name} </button>
  );
}

export default Sidebutton;