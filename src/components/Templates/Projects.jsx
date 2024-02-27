import { Col } from "react-bootstrap";
import TextBlock from "../molecules/TextBlock";
import Pills from "../organisms/Pills";
import Card from "../molecules/Card";
import Section from "../organisms/Section";
import { useState } from "react";

const tabs = {
  first:
    "Progetti in React con Typescript/Javascript più avanzati, realizzati per mettermi alla prova o progetti finali di corsi di approfondimento su React.",
  second:
    "Progetti didattici realizzati per cementificare quanto appreso. Per questi progetti ho utilizzato React + Typescript o HTML, CSS e Javascript",
  third:
    "Primi progetti in React + Javascript o HTML, CSS e Javascript, realizzati durante vari corsi di approfondimento",
};

function Projects() {
  const [descriptionIndex, setDescriptionIndex] = useState("first");

  return (
    <Section className="project" id="projects">
      <Col>
        <TextBlock headingText="Projects" textClassNames="mb-5">
          {tabs[descriptionIndex]}
        </TextBlock>
        <Pills
          tabs={tabs}
          setDescriptionIndex={setDescriptionIndex}
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
