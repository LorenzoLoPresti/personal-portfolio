import { Col } from "react-bootstrap";
import Skill from "../molecules/Skill";
import SkillCarousel from "../molecules/SkillCarousel";
import TextBlock from "../molecules/TextBlock";

import Section from "../organisms/Section";

function Skills() {
  return (
    <Section className="skill" id="skills" hasDetails="left">
      <Col>
        <div className="skill-bx">
          <TextBlock headingText="Skills">
            Ho iniziato a studiare la programmazione frequentando il bootcamp
            Epicode, che mi ha dato modo di imparare a utilizzare Javascript,
            Bootstrap, React, Redux, Java e Spring. Successivamente ho studiato
            in modo molto più approfondito React e Javascript e ho lavorato
            qualche mese in agenzia di comunicazione come frontender con lo
            stack React, Typescript e TailwindCSS.
          </TextBlock>

          <SkillCarousel
            render={(data, i) => (
              <Skill image={data.image} key={data.label + i}>
                {data.label}
              </Skill>
            )}
          />
        </div>
      </Col>
    </Section>
  );
}

export default Skills;
