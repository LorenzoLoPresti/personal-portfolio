import { Col } from "react-bootstrap";

function ProjectImg({ imgUrl, description }) {
  return (
    <Col xs="12" md="7" className="order-2 order-md-1 h-100">
      <div className="single-proj-imgbx d-flex align-items-center bg-dark">
        <img src={imgUrl} alt={description} />
      </div>
    </Col>
  );
}

export default ProjectImg;
