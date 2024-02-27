import { Nav, Row, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { projects } from "../../data/projects";
import { projectCategories } from "../../data/contsants";

const advancedProjects = projects.filter(
  (project) => project.category === projectCategories.advanced
);

const didacticalProjects = projects.filter(
  (project) => project.category === projectCategories.didactical
);

const otherProjects = projects.filter(
  (project) => project.category === projectCategories.other
);

function Pills({ render }) {
  return (
    <TabContainer id="project-tabs" defaultActiveKey="first">
      <Nav
        variant="pills"
        className="nav-pills mb-5 justify-content-center align-items-center"
      >
        <Nav.Item>
          <Nav.Link eventKey="first">React projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Didactical projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Other projects</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent>
        <TabPane eventKey="first">
          <Row>{advancedProjects.map(render)}</Row>
        </TabPane>
        <TabPane eventKey="second">
          <Row>{didacticalProjects.map(render)}</Row>
        </TabPane>
        <TabPane eventKey="third">
          <Row>{otherProjects.map(render)}</Row>
        </TabPane>
      </TabContent>
    </TabContainer>
  );
}

export default Pills;
