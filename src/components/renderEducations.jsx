import { Header, Icon, Item, List, Segment } from "semantic-ui-react";
import "./theme.css";

function renderEducations(educations) {
  if (educations && educations.length) {
    return (
      <Segment>
        <Header as="h3">
          <Icon name="university"></Icon>
          Education
        </Header>
        <div className="content">
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
        </div>{" "}
      </Segment>
    );
  }
  return;
}

function renderProjects(works) {
  return works.map((work, index) => (
    <List.Item key={index}>
      <List.Icon name="paper plane outline"></List.Icon>
      <List.Content>
        <List.Description>{work}</List.Description>
      </List.Content>
    </List.Item>
  ));
}

export default renderEducations;
