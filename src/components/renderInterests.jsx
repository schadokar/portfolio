import { Header, Icon, List, Segment } from "semantic-ui-react";
import "./theme.css";

function renderInterests(interests) {
  if (interests && interests.length) {
    return (
      <Segment>
        <div className="content">
          <Header as="h3">
            <Icon name="paint brush"></Icon>
            Interests
          </Header>
          <List>
            {interests.map((interest, index) => (
              <List.Item key={index}>
                <List.Icon name="angle right"></List.Icon>
                <List.Content>
                  <List.Description>{interest}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      </Segment>
    );
  }
  return;
}

export default renderInterests;
