import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

const iconsData = [
  {
    href: "#",
    alt: "dew",
    linkAlt: "dew",
    image: navIcon1,
  },
  {
    href: "#",
    alt: "dew",
    linkAlt: "dewa",
    image: navIcon2,
  },
  {
    href: "#",
    alt: "dew",
    linkAlt: "dewaa",
    image: navIcon3,
  },
];

function SocialIcons({ render, header, children }) {
  if (header)
    return (
      <span className="navbar-text">
        <div className="social-icon">{iconsData.map(render)}</div>
        {children}
      </span>
    );

  return (
    <div className="social-icon">
      {iconsData.map(render)}
      {children}
    </div>
  );
}

export default SocialIcons;
