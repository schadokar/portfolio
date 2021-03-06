import { Icon } from "semantic-ui-react";

function renderLinks(links) {
  const htmlLinks = [];
  for (let link of links) {
    if (link.website) {
      htmlLinks.push(
        <a href={link.website}>
          <Icon name="globe" size="large" color="black" />
        </a>
      );
    } else if (link.email) {
      htmlLinks.push(
        <a href={`mailto:${link.email}`}>
          <Icon name="envelope outline" size="large" color="black" />
        </a>
      );
    } else {
      const key = Object.keys(link)[0];
      const value = link[key];
      htmlLinks.push(
        <a href={value}>
          <Icon name={key} size="large" color="black" />
        </a>
      );
    }
  }
  return htmlLinks;
}

export default renderLinks;
