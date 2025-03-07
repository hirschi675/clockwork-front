import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import ButtonDetails from "./ButtonDetails"

function TeamMemberDetails(props:any) {
  const [showTeamMemberDetails, setShowTeamMemberDetails] = useState(false)
  const openMemberInfo = () => {
    setShowTeamMemberDetails(!showTeamMemberDetails)
  }
  return (
    <div className="team-member-details-wrapper">
      <label className="team-member-details-checkbox">
        <div className="team-member-details-top-wrapper">
          <input type="checkbox" id="clock-status" onClick={openMemberInfo} />
          {props.name}
          <div className={`member-details-arrow ${showTeamMemberDetails == true? 'rotate-down': 'rotate-back'}`}><FontAwesomeIcon icon={faChevronRight}/></div>
        </div>
        <div className={`member-details ${showTeamMemberDetails == true? 'show-flex': 'hide'}`}>
          <ButtonDetails type="Projects" />
        </div>
      </label>
    </div>
  );
}

export default TeamMemberDetails;
