import { useGoUp } from "../../hooks/useGoUp";
import SocialIcon from "../atoms/SocialIcon";

import navIcon1 from "../../assets/img/nav-icon1.svg";

function GoUp() {
  const { allowed } = useGoUp();

  return (
    <div className={`social-icon go-up ${allowed ? "allowed" : ""}`}>
      <SocialIcon href={"#home"} image={navIcon1} goUp />
    </div>
  );
}

export default GoUp;
