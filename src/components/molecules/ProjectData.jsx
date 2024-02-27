import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import { Github } from "react-bootstrap-icons";
import { useEffect, useRef } from "react";

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
      <ProjectData.Body description={description} />
      <ProjectData.BackButton />
      <ProjectData.NavButtons id={id} numOfProjects={numOfProjects} />
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
    <>
      <Link
        to={`/project/${id - 1 >= 1 ? id - 1 : numOfProjects}`}
        className="text-light"
      >
        prev
      </Link>
      <Link
        to={`/project/${id + 1 <= numOfProjects ? id + 1 : 1}`}
        className="text-light"
      >
        next
      </Link>
    </>
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
      className="text-light position-absolute top-0 end-0 me-2 me-sm-0"
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
