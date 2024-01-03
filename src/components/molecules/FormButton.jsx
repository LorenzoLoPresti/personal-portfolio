import { ArrowClockwise } from "react-bootstrap-icons";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { Col } from "react-bootstrap";

function FormButton({ isLoading, status: { success, message } }) {
  return (
    <Col xs={12} className="d-block d-md-flex align-items-center gap-3">
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <ArrowClockwise className="loader" />
        ) : (
          <Text as="span">Send</Text>
        )}
      </Button>
      {message && (
        <div className="mt-3">
          <Text className={success === false ? "danger mb-0" : "success mb-0"}>
            {message}
          </Text>
        </div>
      )}
    </Col>
  );
}

export default FormButton;
