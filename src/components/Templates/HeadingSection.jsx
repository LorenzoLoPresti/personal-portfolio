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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sed
          voluptas quisquam molestias dignissimos dicta reiciendis consectetur
          ipsam illum. Dolores corrupti ex cum quisquam laboriosam ut recusandae
          unde soluta. Distinctio.
        </Jumbotron.TextBlock>

        <a href="#contact" className="d-inline-block text-decoration-none">
          <Button onClick={() => console.log("Lets connect")}>
            Let's connect <ArrowRightCircle size={25} />
          </Button>
        </a>
      </Jumbotron>
    </Section>
  );
}

export default HeadingSection;
