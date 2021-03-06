import { List } from "semantic-ui-react";
import "./theme.css";

function renderProjects(projects) {
  return (
    <List>
      {projects.map((project) => (
        <List.Item as="a" href={project.link} disabled={!project.link}>
          <List.Icon name="external"></List.Icon>
          <List.Content>
            <List.Description>{project.title}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}

export default renderProjects;
