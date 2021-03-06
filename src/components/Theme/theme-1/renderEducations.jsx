import { Item, List } from "semantic-ui-react";
import "./theme.css";

function renderEducations(educations) {
  return (
    <Item.Group>
      {educations.map((education) => (
        <Item>
          <Item.Content>
            <Item.Header>
              {education.organisation} | {education.year}
            </Item.Header>
            <Item.Meta>{education.field}</Item.Meta>
            <Item.Description>
              <List>{renderProjects(education.projects)}</List>
            </Item.Description>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  );
}

function renderProjects(works) {
  return works.map((work) => (
    <List.Item>
      <List.Icon name="paper plane outline"></List.Icon>
      <List.Content>
        <List.Description>{work}</List.Description>
      </List.Content>
    </List.Item>
  ));
}

export default renderEducations;
