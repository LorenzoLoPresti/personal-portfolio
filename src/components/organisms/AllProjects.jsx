import { Col } from "react-bootstrap";
import TextBlock from "../molecules/TextBlock";
import Pills from "./Pills";
import Card from "../molecules/Card";
import Section from "./Section";
import { useState } from "react";
import { tabs } from "../../data/constants";

function AllProjects() {
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

export default AllProjects;
