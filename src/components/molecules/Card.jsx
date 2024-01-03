import { Col } from "react-bootstrap";
import TextBlock from "./TextBlock";

function Card({ title, imgUrl, children }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <TextBlock headingAs="h4" textAs="span" headingText={title}>
            {children}
          </TextBlock>
        </div>
      </div>
    </Col>
  );
}

export default Card;
