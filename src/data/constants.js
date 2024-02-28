import linkedinIcon from "../assets/img/nav-icon1.svg";
// import fbIcon from "../assets/img/nav-icon2.svg";
import instagramIcon from "../assets/img/nav-icon3.svg";
import { projectCategories, projects } from "./projects";

// Tabs constants

export const reactProjects = "React projects";
export const didacticalProjects = "Didactical projects";
export const otherProjects = "Other projects";

export const tabs = {
  first:
    "Progetti in React con Typescript/Javascript più avanzati, realizzati per mettermi alla prova o progetti finali di corsi di approfondimento su React.",
  second:
    "Progetti didattici realizzati per cementificare quanto appreso. Per questi progetti ho utilizzato React + Typescript o HTML, CSS e Javascript",
  third:
    "Primi progetti in React + Javascript o HTML, CSS e Javascript, realizzati durante vari corsi di approfondimento",
};

export const projectsTabFilters = {
  [reactProjects]: projects.filter(
    (project) => project.category === projectCategories.advanced
  ),
  [didacticalProjects]: projects.filter(
    (project) => project.category === projectCategories.didactical
  ),
  [otherProjects]: projects.filter(
    (project) => project.category === projectCategories.other
  ),
};

export const tabNames = {
  first: reactProjects,
  second: didacticalProjects,
  third: otherProjects,
};

// Social networks icons
export const iconsData = [
  {
    href: "https://www.linkedin.com/in/lorenzo-lo-presti-a57aa4267/",
    alt: "linkedin social icon",
    linkAlt: "https://www.google.com",
    image: linkedinIcon,
  },
  // {
  //   href: "#",
  //   alt: "dew",
  //   linkAlt: "dewa",
  //   image: fbIcon,
  // },
  {
    href: "https://www.instagram.com/lorenzo_lo_presti91/",
    alt: "instagram social icon",
    linkAlt: "https://www.google.com",
    image: instagramIcon,
  },
];
