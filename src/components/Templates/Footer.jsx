import { Col } from "react-bootstrap";

import SocialIcons from "../molecules/SocialIcons";
import SocialIcon from "../atoms/SocialIcon";
import Text from "../atoms/Text";
import Logo from "../atoms/Logo";
import Section from "../organisms/Section";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <Section className="footer py-5" isContentCentered isFooter>
      <Col sm={6} className="d-flex d-sm-block justify-content-center">
        <Logo />
      </Col>
      <Col sm={6} className="text-center text-sm-end mt-3 mt-sm-0">
        <SocialIcons
          render={(options) => <SocialIcon {...options} key={options.alt} />}
        />
      </Col>
      <Text className="text-center text-sm-end">
        &copy;CopyRight {currentYear}. All Right Reserved
      </Text>
    </Section>
  );
}

export default Footer;
