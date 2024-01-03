import Text from "./Text";
import PropTypes from "prop-types";

function Button({ type, onClick, children, disabled, className }) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <Text as="span">{children}</Text>
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
