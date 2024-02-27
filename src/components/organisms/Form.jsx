import { useForm } from "../../hooks/useForm";
import Input from "../atoms/Input";

import Text from "../atoms/Text";
import FormButton from "../molecules/FormButton";
import { Row } from "react-bootstrap";

function Form() {
  const {
    formDetails: { email, firstName, lastName, message, phone },
    handleSubmit,
    isLoading,
    onFormUpdate,
    status,
  } = useForm();

  return (
    <section>
      <Text as="h2">Get in touch</Text>
      <form onSubmit={handleSubmit}>
        <Row className="position-relative">
          <Input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={onFormUpdate}
            disabled={isLoading}
            field="firstName"
          />
          <Input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={onFormUpdate}
            disabled={isLoading}
            field="lastName"
          />
          <Input
            type="text"
            value={email}
            placeholder="Email Address"
            onChange={onFormUpdate}
            disabled={isLoading}
            field="email"
          />
          <Input
            type="text"
            value={phone}
            placeholder="Phone Number"
            onChange={onFormUpdate}
            disabled={isLoading}
            field="phone"
          />
          <Input
            as="textarea"
            value={message}
            placeholder="Message"
            onChange={(e) => onFormUpdate(e, "message")}
            disabled={isLoading}
            field="message"
          />

          <FormButton isLoading={isLoading} status={status} />
        </Row>
      </form>
    </section>
  );
}

export default Form;
