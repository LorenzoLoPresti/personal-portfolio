import useFindProject from "../../hooks/useFindProject";
import Section from "./Section";
import ProjectImg from "../molecules/ProjectImg";
import ProjectData from "../molecules/ProjectData";
import { useEffect, useRef } from "react";

function Project() {
  const ref = useRef(null);

  const {
    category,
    description: { long: longDescription, short: shortDescription },
    imgUrl,
    title,
    numOfProjects,
    paramId,
    link,
  } = useFindProject();

  useEffect(function () {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={ref}>
      <Section
        isContentCentered
        className="single-project"
        id="projects"
        key={paramId}
      >
        <ProjectImg description={shortDescription} imgUrl={imgUrl} />
        <ProjectData
          description={longDescription}
          numOfProjects={numOfProjects}
          link={link}
          id={paramId}
          title={title}
        />
      </Section>
    </div>
  );
}

export default Project;
