import Text from "../atoms/Text";

function UnderConstruction() {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Text as="h4">Server Under Construction</Text>
    </div>
  );
}

export default UnderConstruction;
