import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../../assets/img/skills/HTML.svg";
import css from "../../assets/img/skills/CSS.svg";
import js from "../../assets/img/skills/JavaScript.svg";
import ts from "../../assets/img/skills/Typescript.svg";
import react from "../../assets/img/skills/React.svg";
import tailwind from "../../assets/img/skills/Tailwind.svg";
import bootstrap from "../../assets/img/skills/Bootstrap.svg";
import java from "../../assets/img/skills/Java.svg";
import spring from "../../assets/img/skills/Spring.svg";

const carouselData = [
  {
    image: js,
    label: "Javascript",
  },
  {
    image: ts,
    label: "Typescript",
  },
  {
    image: react,
    label: "React",
  },
  {
    image: tailwind,
    label: "Tailwind",
  },
  {
    image: bootstrap,
    label: "Bootstrap",
  },
  {
    image: java,
    label: "Java",
  },
  {
    image: spring,
    label: "Springboot",
  },
  {
    image: html,
    label: "HTML",
  },
  {
    image: css,
    label: "CSS",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function SkillCarousel({ render }) {
  return (
    <Carousel responsive={responsive} infinite className="skill-slider">
      {carouselData.map(render)}
    </Carousel>
  );
}

export default SkillCarousel;
