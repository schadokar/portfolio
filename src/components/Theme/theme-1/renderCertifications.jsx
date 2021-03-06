import { Item, Icon } from "semantic-ui-react";
import "./theme.css";

function renderCertifications(certifications) {
  return (
    <Item.Group>
      {certifications.map((certification) => (
        <Item>
          <Item.Content>
            <Icon name="chain"></Icon>
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
            <Item.Extra>Certified By {certification.certifiedBy}</Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  );
}

export default renderCertifications;
