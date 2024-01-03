function BackgroundDetails({ src, direction }) {
  return (
    <img
      className={`background-image-${direction}`}
      src={src}
      alt="background"
    />
  );
}

export default BackgroundDetails;
