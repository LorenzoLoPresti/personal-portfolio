import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";

const carouselData = [
  {
    image: meter1,
    label: "Web Development",
  },
  {
    image: meter2,
    label: "Brand Identity",
  },
  {
    image: meter3,
    label: "Logo Design",
  },
  {
    image: meter1,
    label: "Web Development",
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
