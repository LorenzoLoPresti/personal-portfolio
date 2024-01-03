import { Container, Row } from "react-bootstrap";
import BackgroundDetails from "../atoms/BackgroundDetails";
import colorSharp from "../../assets/img/color-sharp.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";

function Section({
  id,
  isContentCentered,
  className,
  hasDetails,
  isFooter,
  children,
}) {
  const El = isFooter ? "footer" : "section";

  return (
    <El className={`sections ${className || ""}`} id={id}>
      <Container>
        <Row className={isContentCentered ? "align-items-center" : ""}>
          {children}
        </Row>
      </Container>
      {hasDetails === "left" && (
        <BackgroundDetails direction="left" src={colorSharp} />
      )}

      {hasDetails === "right" && (
        <BackgroundDetails direction="right" src={colorSharp2} />
      )}
    </El>
  );
}

export default Section;
