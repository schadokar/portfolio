import { Icon, Popup } from "semantic-ui-react";
import "./theme.css";

function renderSkills(skills) {
  return skills.map((skill) => (
    <Popup
      content={skill}
      trigger={
        <Icon className="skills" name={skill} size="large" color="black" />
      }
    ></Popup>
  ));
}

export default renderSkills;
