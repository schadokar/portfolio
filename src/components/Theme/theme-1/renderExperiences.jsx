import { Item, List } from "semantic-ui-react";
import "./theme.css";

function renderExperiences(experiences) {
  return (
    <Item.Group>
      {experiences.map((skill) => (
        <Item>
          <Item.Content>
            <Item.Header>{skill.organisation}</Item.Header>
            <Item.Meta>{skill.year}</Item.Meta>
            <Item.Description>
              <List>{renderWorks(skill.works)}</List>
            </Item.Description>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  );
}

function renderWorks(works) {
  return works.map((work) => (
    <List.Item>
      <List.Icon name="paper plane outline"></List.Icon>
      <List.Content>
        <List.Description>{work}</List.Description>
      </List.Content>
    </List.Item>
  ));
}

export default renderExperiences;
