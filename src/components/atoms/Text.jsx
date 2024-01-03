function Text({ as = "p", className, children }) {
  const El = as;

  return <El className={className}>{children}</El>;
}

export default Text;
