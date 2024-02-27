import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function useFindProject() {
  const { id } = useParams();

  const paramId = Number(id);
  const numOfProjects = projects.length;

  const { title, category, imgUrl, description, link } = projects.find(
    ({ id: prjId }) => {
      return prjId === paramId;
    }
  );

  return {
    title,
    category,
    imgUrl,
    description,
    link,
    numOfProjects,
    paramId,
  };
}

export default useFindProject;
