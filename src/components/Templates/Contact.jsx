import { Col } from "react-bootstrap";
import Form from "../organisms/Form";

import contactImg from "../../assets/img/contact-img.svg";
import Section from "../organisms/Section";

function Contact() {
  return (
    <Section className="contact" id="connect" isContentCentered>
      <Col md={6}>
        <img src={contactImg} alt="contact us" />
      </Col>
      <Col md={6}>
        <Form />
      </Col>
    </Section>
  );
}

export default Contact;
