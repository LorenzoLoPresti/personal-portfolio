import { useState } from "react";

const formInitialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export function useForm() {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({});

  function onFormUpdate(e, category) {
    setFormDetails((formDetails) => ({
      ...formDetails,
      [category]: e.target.value,
    }));
    console.log(formDetails);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      setStatus({});

      let response = await fetch("http://localhost5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json; charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      let result = response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      }
    } catch (err) {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return { formDetails, isLoading, status, handleSubmit, onFormUpdate };
}
