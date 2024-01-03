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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis porro
            ut expedita, nam pariatur neque nostrum dolor asperiores saepe
            sequi? Ipsam in optio iste fugit ab, sequi alias totam deleniti.
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
