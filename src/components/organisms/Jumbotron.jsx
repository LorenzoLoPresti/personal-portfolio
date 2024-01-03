import { Col } from "react-bootstrap";
import Text from "../atoms/Text";

function Jumbotron({ img, alt, children }) {
  return (
    <>
      <Col xs={12} md={6} xl={7}>
        {children}
      </Col>
      <Jumbotron.Image img={img} alt={alt} />
    </>
  );
}

function Tagline({ children }) {
  return (
    <Text as="span" className="tagline">
      {children}
    </Text>
  );
}

function Title({ name, animatedText }) {
  return (
    <Text as="h1">
      {`Hi I'm ${name} `}
      <br />
      <Text as="span" className="wrap d-md-none d-lg-block">
        {animatedText}
      </Text>
    </Text>
  );
}

function Paragraph({ children }) {
  return <Text as="p">{children}</Text>;
}

function TextBlock({ name, animatedText, children }) {
  return (
    <>
      <div className="title-container">
        <Jumbotron.Title name={name} animatedText={animatedText} />
      </div>
      <Jumbotron.Paragraph>{children}</Jumbotron.Paragraph>
    </>
  );
}

function Image({ img, alt }) {
  return (
    <Col xs={12} md={6} xl={5}>
      <img src={img} alt={alt} />
    </Col>
  );
}

Jumbotron.Tagline = Tagline;
Jumbotron.TextBlock = TextBlock;
Jumbotron.Title = Title;
Jumbotron.Paragraph = Paragraph;
Jumbotron.Image = Image;

export default Jumbotron;
