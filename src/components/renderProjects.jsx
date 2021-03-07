import { Header, Icon, List, Segment } from "semantic-ui-react";
import "./theme.css";

function renderProjects(projects) {
  if (projects && projects.length) {
    return (
      <Segment>
        <Header as="h3">
          <Icon name="lab"></Icon>
          Projects
        </Header>
        <div className="content">
          <List>
            {projects.map((project, index) => (
              <List.Item
                key={index}
                as="a"
                href={project.link}
                disabled={!project.link}
              >
                <List.Icon name="external"></List.Icon>
                <List.Content>
                  <List.Description>{project.title}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      </Segment>
    );
  }
}

export default renderProjects;
