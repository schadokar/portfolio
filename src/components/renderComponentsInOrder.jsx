import renderSkills from "./renderSkills";
import renderExperiences from "./renderExperiences";
import renderEducations from "./renderEducations";
import renderProjects from "./renderProjects";
import renderCertifications from "./renderCertifications";
import renderInterests from "./renderInterests";

function renderComponentsInOrder(
  contentOrder,
  skills,
  skillsWithIcon,
  experiences,
  projects,
  certifications,
  educations,
  interests
) {
  const renderFunctionsOrder = [];
  for (let content of contentOrder) {
    switch (content) {
      case "skills":
        renderFunctionsOrder.push(renderSkills(skills, skillsWithIcon));
        break;
      case "experiences":
        renderFunctionsOrder.push(renderExperiences(experiences));
        break;
      case "projects":
        renderFunctionsOrder.push(renderProjects(projects));
        break;
      case "certifications":
        renderFunctionsOrder.push(renderCertifications(certifications));
        break;
      case "educations":
        renderFunctionsOrder.push(renderEducations(educations));
        break;
      case "interests":
        renderFunctionsOrder.push(renderInterests(interests));
        break;
      default:
        break;
    }
  }
  return renderFunctionsOrder;
}

export default renderComponentsInOrder;
