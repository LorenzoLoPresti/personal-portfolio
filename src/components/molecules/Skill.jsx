import Text from "../atoms/Text";

function Skill({ image, children }) {
  return (
    <div className="item">
      <img src={image} alt="Skill Chart" />
      <Text as="h5">{children}</Text>
    </div>
  );
}

export default Skill;
