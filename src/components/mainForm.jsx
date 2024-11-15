import React from "react";
import AddressForm from "./addressForm";
import BasicForm from "./basicForm";
import ContactForm from "./contactForm";

const Form = ({ methods }) => {
  // const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <BasicForm />
      <AddressForm />
      <ContactForm />
      <button className="btn btn-primary">Create New Account</button>
    </form>
  );
};

export default Form;
