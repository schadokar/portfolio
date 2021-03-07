import { Segment, Header, Icon, Item, List } from "semantic-ui-react";
import "./theme.css";

function renderExperiences(experiences) {
  if (experiences && experiences.length) {
    return (
      <Segment>
        <Header as="h3">
          <Icon name="briefcase"></Icon>
          Experiences
        </Header>
        <div className="content">
          <Item.Group>
            {experiences.map((skill, index) => (
              <Item key={index}>
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
        </div>
      </Segment>
    );
  }
  return;
}

function renderWorks(works) {
  return works.map((work, index) => (
    <List.Item key={index}>
      <List.Icon name="paper plane outline"></List.Icon>
      <List.Content>
        <List.Description>{work}</List.Description>
      </List.Content>
    </List.Item>
  ));
}

export default renderExperiences;
