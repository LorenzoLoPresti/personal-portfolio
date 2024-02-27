import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import { Github } from "react-bootstrap-icons";

function ProjectData({ title, description, id, numOfProjects, link }) {
  return (
    <Col
      xs="12"
      md="5"
      className="text-center pt-5 position-relative order-1 order-md-2 mb-5 mb-md-0 px-4 px-md-1"
    >
      <ProjectData.Heading
        title={title}
        description={description}
        link={link}
      />
      <ProjectData.NavButtons id={id} numOfProjects={numOfProjects} />
      <ProjectData.Body description={description} />
      <ProjectData.BackButton />
    </Col>
  );
}

function Heading({ title, link }) {
  return (
    <div className="single-proj-txtx d-flex align-items-center justify-content-center gap-2">
      <Text as="h2" className="my-0">
        {title}
      </Text>
      <ProjectData.Icon link={link} size={20} icon={Github} />
    </div>
  );
}

function NavButtons({ id, numOfProjects }) {
  return (
    <div className="mt-3">
      <Link
        to={`/project/${id - 1 >= 1 ? id - 1 : numOfProjects}`}
        className="me-3 proj-nav-buttons"
      >
        <span className="me-2">&larr;</span> prev
      </Link>
      <Link
        to={`/project/${id + 1 <= numOfProjects ? id + 1 : 1}`}
        className="proj-nav-buttons"
      >
        next <span className="ms-2">&rarr;</span>
      </Link>
    </div>
  );
}

function Body({ description }) {
  const { body, stack } = description;

  return (
    <div className="my-4 d-flex flex-column gap-1 text-start">
      <Text>{body}</Text>
      <ul>
        {stack.map((el, i) => (
          <li key={el + i}>
            <Text className={"my-1"}>{el}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Icon({ link, size, icon }) {
  const El = icon;
  return (
    <a className="proj-icon" href={link} target="_blank" rel="noreferrer">
      <El size={size} />
    </a>
  );
}

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="position-absolute top-0 end-0 me-2 me-sm-0 proj-back-button"
      onClick={() => navigate("/")}
    >
      &larr; back
    </button>
  );
}

ProjectData.Heading = Heading;
ProjectData.NavButtons = NavButtons;
ProjectData.Body = Body;
ProjectData.Icon = Icon;
ProjectData.BackButton = BackButton;

export default ProjectData;
