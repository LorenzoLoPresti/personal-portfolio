import { Col } from "react-bootstrap";

function Input({
  as = "input",
  value,
  type,
  onChange,
  disabled,
  placeholder,
  field,
}) {
  const El = as;
  return (
    <Col sm={as === "input" ? 6 : 12} className="px-1">
      <El
        required={as === "input" && true}
        className="input-field"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e, field)}
        disabled={disabled}
      />
    </Col>
  );
}

export default Input;
