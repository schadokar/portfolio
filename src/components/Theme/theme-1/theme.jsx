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
import renderSkills from "./renderSkills";
import renderExperiences from "./renderExperiences";
import renderEducations from "./renderEducations";
import renderProjects from "./renderProjects";
import renderCertifications from "./renderCertifications";

function Theme1({ profile }) {
  const {
    name,
    title,
    summary,
    quote,
    certifications,
    educations,
    experiences,
    links,
    projects,
    skills,
    resume,
  } = profile;
  return (
    <Container className="theme-container">
      <Grid>
        <GridRow>
          <GridColumn width="4">
            <Card>
              <Image
                src="profilePic.JPEG"
                wrapped
                ui={true}
                size="medium"
                circular
              />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{title}</Card.Meta>
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
            <Segment>
              <Header as="h3">
                <Icon name="rocket"></Icon>
                Summary
              </Header>
              <div className="content">{summary}</div>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="chess queen"></Icon>
                Skills
              </Header>
              <div className="content">{renderSkills(skills)}</div>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="briefcase"></Icon>
                Experiences
              </Header>
              <div className="content">{renderExperiences(experiences)}</div>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="lab"></Icon>
                Projects
              </Header>
              <div className="content">{renderProjects(projects)}</div>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="certificate"></Icon>
                Certifications
              </Header>
              <div className="content">
                {renderCertifications(certifications)}
              </div>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="university"></Icon>
                Education
              </Header>
              <div className="content">{renderEducations(educations)}</div>
            </Segment>
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
}

export default Theme1;
