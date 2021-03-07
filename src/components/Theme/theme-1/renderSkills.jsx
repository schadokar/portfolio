import { Icon, Popup, Segment } from "semantic-ui-react";
import "./theme.css";

function renderSkills(skills, skillsWithIcon) {
  return (
    <div>
      <Segment vertical>{skills.join(" | ")}</Segment>
      <Segment vertical>{renderSkillsWithIcon(skillsWithIcon)}</Segment>
    </div>
  );
}

function renderSkillsWithIcon(skillsWithIcon) {
  return skillsWithIcon.map((skill) => {
    if (skill.color) {
      return (
        <Popup
          content={skill.name}
          trigger={
            <Icon
              className="skills"
              name={skill.name}
              size="large"
              color={skill.color}
            />
          }
        ></Popup>
      );
    }

    return (
      <Popup
        content={skill}
        trigger={
          <Icon className="skills" name={skill} size="large" color="black" />
        }
      ></Popup>
    );
  });
}

export default renderSkills;
