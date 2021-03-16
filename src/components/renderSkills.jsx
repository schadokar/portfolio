import { Header, Icon, Popup, Segment } from "semantic-ui-react";
import "./theme.css";

function renderSkills(skills, skillsWithIcon) {
  if ((skills && skills.length) || (skillsWithIcon && skillsWithIcon.length)) {
    return (
      <Segment>
        <div className="content">
          <Header as="h3">
            <Icon name="chess queen"></Icon>
            Skills
          </Header>
          {renderSkillsWithoutIcon(skills)}
          {renderSkillsWithIcon(skillsWithIcon)}
        </div>
      </Segment>
    );
  }
}

function renderSkillsWithoutIcon(skills) {
  if (skills && skills.length) {
    return <Segment vertical>{skills.join(" | ")}</Segment>;
  }
}

function renderSkillsWithIcon(skillsWithIcon) {
  if (skillsWithIcon && skillsWithIcon.length) {
    return (
      <Segment vertical>
        {skillsWithIcon.map((skill) => {
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
                <Icon
                  className="skills"
                  name={skill}
                  size="large"
                  color="black"
                />
              }
            ></Popup>
          );
        })}
      </Segment>
    );
  }
}

export default renderSkills;
