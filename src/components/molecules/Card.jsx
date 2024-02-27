import { Col } from "react-bootstrap";
import TextBlock from "./TextBlock";
import { useNavigate } from "react-router-dom";
import { Github } from "react-bootstrap-icons";
import { useRef } from "react";

function Card({ id, title, imgUrl, link, children }) {
  const navigate = useNavigate();
  const ref = useRef(null);

  function handleClick(e) {
    if (e.target !== ref.current) navigate(`/project/${id}`);
  }

  return (
    <Col sm={6} md={4}>
      <div
        className="proj-imgbx d-flex justify-content-center align-items-center bg-dark"
        onClick={handleClick}
      >
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <TextBlock headingAs="h4" textAs="span" headingText={title}>
            {children}
          </TextBlock>
          {/* Github icon on project hover */}
          <div className="mt-2">
            <a href={link} target="_blank" rel="noreferrer">
              <Github size={20} ref={ref} className="proj-icon text-light" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Card;
