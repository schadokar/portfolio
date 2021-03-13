import "./theme.css";
import { Container, Icon, Segment, Item } from "semantic-ui-react";
import renderLinks from "./renderLinks";
import renderComponentsInOrder from "./renderComponentsInOrder";

function ProfessionalBasic({ profile }) {
  const {
    name,
    title,
    profilePicture,
    currentCompany,
    summary,
    location,
    certifications,
    educations,
    experiences,
    links,
    projects,
    interests,
    skills,
    skillsWithIcon,
    resume,
    contentOrder,
  } = profile;
  return (
    <Container className="theme-container">
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size="small"
                src={process.env.PUBLIC_URL + "/" + profilePicture}
              ></Item.Image>
              <Item.Content>
                <Item.Header as="h1">{name}</Item.Header>
                <Item.Meta>
                  <Icon name="suitcase"></Icon> {title}{" "}
                  {currentCompany ? `at ${currentCompany}` : ""}
                </Item.Meta>
                <Item.Meta>
                  <Icon name="location arrow"> </Icon> {location}
                </Item.Meta>
                <Item.Description>{summary}</Item.Description>
                <Item.Extra>{renderLinks(links)}</Item.Extra>
                <Item.Extra>
                  {" "}
                  Resume {"  "}
                  <a href={resume} target="_blank" rel="noreferrer">
                    <Icon name="download"></Icon>
                  </a>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        {renderComponentsInOrder(
          contentOrder,
          skills,
          skillsWithIcon,
          experiences,
          projects,
          certifications,
          educations,
          interests
        )}
      </Segment.Group>
    </Container>
  );
}

export default ProfessionalBasic;
