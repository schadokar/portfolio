import { Header, Item, Icon, Segment } from "semantic-ui-react";
import "./theme.css";

function renderCertifications(certifications) {
  // check if there is any certifications
  if (certifications && certifications.length) {
    return (
      <Segment>
        <div className="content">
          <Header as="h3">
            <Icon name="certificate"></Icon>
            Certifications
          </Header>
          <Item.Group>
            {certifications.map((certification, index) => (
              <Item key={index}>
                <Item.Content>
                  <Item.Header>{certification.title}</Item.Header>
                  <Item.Meta>
                    <a
                      href={`//${certification.link}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {certification.link}
                    </a>
                  </Item.Meta>
                  <Item.Extra>
                    Certified By {certification.certifiedBy}
                  </Item.Extra>
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

export default renderCertifications;
