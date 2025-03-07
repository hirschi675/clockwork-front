import { ListFormat } from "typescript";
import TeamMemberDetails from "./TeamMemberDetails";

function TeamDetails() {
  var element:any
  const teamMembersList:string[] = ["Alex", "Justice", "Kaden", "Karl", "Logan", "Slade"];
  // TODO: Logan figure out how to append this to the team-details-wrapper
  for (let i = 0; i < teamMembersList.length; i++) {
    element = <TeamMemberDetails name={teamMembersList[i]} />
  }
  return (
    <div id="team-details" className="team-details-wrapper">
      <search></search>
      <TeamMemberDetails name={teamMembersList[0]} />
      <TeamMemberDetails name={teamMembersList[1]} />
      <TeamMemberDetails name={teamMembersList[2]} />
      <TeamMemberDetails name={teamMembersList[3]} />
      <TeamMemberDetails name={teamMembersList[4]} />
      <TeamMemberDetails name={teamMembersList[5]} />
    </div>
);
}

export default TeamDetails;
