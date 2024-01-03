import Text from "../atoms/Text";

function TextBlock({
  headingAs = "h2",
  textAs = "p",
  headingClassNames,
  textClassNames,
  isMainTitle,
  headingText,
  children,
}) {
  return (
    <>
      <Text
        as={isMainTitle ? "h1" : headingAs}
        className={`${headingClassNames ? headingClassNames : ""}`}
      >
        {headingText}
      </Text>
      <Text as={textAs} className={`${textClassNames ? textClassNames : ""}`}>
        {children}
      </Text>
    </>
  );
}

export default TextBlock;
