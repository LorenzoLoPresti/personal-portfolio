import { Triangle } from "react-bootstrap-icons";

function SocialIcon({ href, image, imgAlt, linkAlt, goUp }) {
  if (goUp)
    return (
      <a href={href}>
        <Triangle className="svg text-light" />
      </a>
    );

  return (
    <a href={href} alt={linkAlt} target="_blank" rel="noreferrer">
      {goUp ? (
        <Triangle className="svg text-light" />
      ) : (
        <img className="svg" src={image} alt={imgAlt} />
      )}
    </a>
  );
}

export default SocialIcon;
