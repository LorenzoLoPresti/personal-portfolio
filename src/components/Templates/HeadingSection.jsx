import Jumbotron from "../organisms/Jumbotron";
import Section from "../organisms/Section";
import Button from "../atoms/Button";

import { ArrowRightCircle } from "react-bootstrap-icons";
import { useHeadingAnimation } from "../../hooks/useHeadingAnimation";

import headerImg from "../../assets/img/header-img.svg";

const period = 2000;

function HeadingSection() {
  const { text: animatedText } = useHeadingAnimation(period);

  return (
    <Section className="banner" id="home" isContentCentered>
      <Jumbotron img={headerImg} alt="header">
        <Jumbotron.Tagline>Welcome to my portfolio</Jumbotron.Tagline>

        <Jumbotron.TextBlock name="Lorenzo" animatedText={animatedText}>
          Junior full-stack developer che sta cercando di specializarsi nel
          frontend con React e Typescript e che cerca di rispondere alla
          domanda: a 30 e più anni si può cambiare vita in italia?
        </Jumbotron.TextBlock>

        <a href="#contact" className="d-inline-block text-decoration-none">
          <Button>
            Let's connect <ArrowRightCircle size={25} />
          </Button>
        </a>
      </Jumbotron>
    </Section>
  );
}

export default HeadingSection;
