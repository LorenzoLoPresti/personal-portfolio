import { Nav, Row, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { projectsTabFilters, tabNames } from "../../data/constants";

function Pills({ setDescriptionIndex, tabs, render }) {
  const tabsArray = Object.keys(tabs).map((el) => ({
    tabIndex: el,
    tabName: tabNames[el],
    tabElements: projectsTabFilters[tabNames[el]],
  }));

  return (
    <TabContainer id="project-tabs" defaultActiveKey="first">
      <Nav
        variant="pills"
        className="nav-pills mb-5 justify-content-center align-items-center"
      >
        {tabsArray.map(({ tabIndex, tabName }) => (
          <Nav.Item key={tabName}>
            <Nav.Link
              eventKey={tabIndex}
              onClick={() => setDescriptionIndex(tabIndex)}
            >
              {tabName}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <TabContent>
        {tabsArray.map(({ tabIndex, tabElements }) => (
          <TabPane
            key={tabIndex}
            eventKey={tabIndex}
            onClick={() => setDescriptionIndex(tabIndex)}
          >
            <Row>{tabElements.map(render)}</Row>
          </TabPane>
        ))}
      </TabContent>
    </TabContainer>
  );
}

export default Pills;
