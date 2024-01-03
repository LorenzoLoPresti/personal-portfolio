import { Nav } from "react-bootstrap";

function NavBarSettings({ isActive, onUpdateActiveLink }) {
  return (
    <Nav className="ms-auto">
      <Nav.Link
        href="#home"
        className={isActive === "home" ? "active navbar-link" : "navbar-link"}
        onClick={() => onUpdateActiveLink("home")}
      >
        Home
      </Nav.Link>
      <Nav.Link
        href="#skills"
        className={isActive === "skills" ? "active navbar-link" : "navbar-link"}
        onClick={() => onUpdateActiveLink("skills")}
      >
        Skills
      </Nav.Link>
      <Nav.Link
        href="#projects"
        className={
          isActive === "projects" ? "active navbar-link" : "navbar-link"
        }
        onClick={() => onUpdateActiveLink("projects")}
      >
        Projects
      </Nav.Link>
    </Nav>
  );
}

export default NavBarSettings;
