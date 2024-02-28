import { useNavbarAnimation } from "../../hooks/useNavbarAnimation";

import { Navbar, Container, Nav } from "react-bootstrap";

import SocialIcons from "../molecules/SocialIcons";
import SocialIcon from "../atoms/SocialIcon";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import NavBarSettings from "../organisms/NavBarSettings";

export function NavBar() {
  const { isActive, onUpdateActiveLink, scrolled } = useNavbarAnimation();

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <NavBarSettings
            isActive={isActive}
            onUpdateActiveLink={onUpdateActiveLink}
          />
          <SocialIcons
            header
            render={(options) => <SocialIcon key={options.alt} {...options} />}
          >
            <Nav.Link
              href="#contact"
              onClick={() => onUpdateActiveLink("contact")}
            >
              <Button className="vvd">Lets connect</Button>
            </Nav.Link>
          </SocialIcons>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
