import { Col } from "react-bootstrap";
import TextBlock from "../molecules/TextBlock";
import Pills from "../organisms/Pills";
import Card from "../molecules/Card";
import Section from "../organisms/Section";

function Projects() {
  return (
    <Section className="project" id="projects">
      <Col>
        <TextBlock headingText="Projects">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          ipsa ullam corrupti aut dignissimos, nesciunt voluptatum sapiente,
          sint facere iste ipsam quasi autem atque? Vero possimus quae
          accusantium recusandae facilis?
        </TextBlock>
        <Pills
          render={(project) => (
            <Card key={project.id} {...project}>
              {project.description.short}
            </Card>
          )}
        />
      </Col>
    </Section>
  );
}

export default Projects;
