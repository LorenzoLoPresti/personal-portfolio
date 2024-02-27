import { Col } from "react-bootstrap";
// import Form from "../organisms/Form";

import contactImg from "../../assets/img/contact-img.svg";
import Section from "../organisms/Section";
import UnderConstruction from "../molecules/UnderConstruction";

function Contact() {
  return (
    <Section className="contact" id="contact" isContentCentered>
      <Col md={6}>
        <img src={contactImg} alt="contact us" />
      </Col>
      <Col md={6}>
        {/* <Form /> */}
        <UnderConstruction />
      </Col>
    </Section>
  );
}

export default Contact;
