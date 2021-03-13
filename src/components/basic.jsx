import "./theme.css";
import {
  Container,
  Grid,
  GridRow,
  GridColumn,
  Card,
  Icon,
  Image,
  Segment,
  Header,
} from "semantic-ui-react";
import renderLinks from "./renderLinks";
import renderComponentsInOrder from "./renderComponentsInOrder";

function Basic({ profile }) {
  const {
    name,
    title,
    profilePicture,
    currentCompany,
    summary,
    quote,
    certifications,
    educations,
    experiences,
    links,
    projects,
    skills,
    skillsWithIcon,
    interests,
    resume,
    contentOrder,
  } = profile;
  return (
    <Container className="theme-container">
      <Grid>
        <GridRow>
          <GridColumn width="4">
            <Card>
              <Image
                src={process.env.PUBLIC_URL + "/" + profilePicture}
                ui={true}
                size="medium"
              />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                  {title} {currentCompany ? `at ${currentCompany}` : ""}
                </Card.Meta>
                <Card.Description>
                  <i> {quote}</i>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>{renderLinks(links)}</Card.Content>
              <Card.Content>
                Resume {"  "}
                <a href={resume} target="_blank" rel="noreferrer">
                  <Icon name="download"></Icon>
                </a>
              </Card.Content>
            </Card>
          </GridColumn>
          <GridColumn width="12">
            <Segment.Group>
              <Segment>
                <Header as="h3">
                  <Icon name="rocket"></Icon>
                  Summary
                </Header>
                <div className="content">{summary}</div>
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
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
}

export default Basic;
