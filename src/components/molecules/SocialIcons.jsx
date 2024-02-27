import { iconsData } from "../../data/constants";

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
