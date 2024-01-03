import { Nav, Row, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { advancedProjects } from "../../data/projects";

function Pills({ render }) {
  return (
    <TabContainer id="project-tabs" defaultActiveKey="first">
      <Nav
        variant="pills"
        className="nav-pills mb-5 justify-content-center align-items-center"
      >
        <Nav.Item>
          <Nav.Link eventKey="first">More advanced react projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Didactical react projects</Nav.Link>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda
          id reiciendis explicabo, iusto quidem ipsa ipsam dignissimos esse
          amet, recusandae hic delectus sit. Suscipit officiis error magnam
          similique laudantium?
        </TabPane>
        <TabPane eventKey="third">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda
          id reiciendis explicabo, iusto quidem ipsa ipsam dignissimos esse
          amet, recusandae hic delectus sit. Suscipit officiis error magnam
          similique laudantium?
        </TabPane>
      </TabContent>
    </TabContainer>
  );
}

export default Pills;
