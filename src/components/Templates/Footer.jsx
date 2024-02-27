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
      <div className="d-block mt-4 mt-md-0 d-md-flex justify-content-between align-items-end">
        <div>
          <p className="svg-ref text-center">
            *Programming language svg taken from{" "}
            <a
              href="http://www.onlinewebfonts.com"
              target="_blank"
              rel="noreferrer"
            >
              Web Fonts
            </a>{" "}
            is licensed by CC BY 4.0
          </p>
        </div>
        <Text className="text-center">
          &copy;Copyright LorenzoLoPresti {currentYear}. All Right Reserved
        </Text>
      </div>
    </Section>
  );
}

export default Footer;
