import React from "react";
import { useForm } from "react-hook-form";
import "./formsubmit.css";

function MyForm() {
  // Initializing useForm hook
  const {
    register, // Registers inputs and applies validation rules
    handleSubmit, // Handles form submission
    watch, // Allows watching specific form values
    formState: { errors ,isDirty,isValid}, // Retrieves form errors
    reset
  } = useForm({ defaultValues: { firstName: "", email: "default@gmail.com" } });

  // Function called upon form submission
  const onSubmit = (data) => {
    console.log(data); // Logs form data on successful submission
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* First Name Input Field */}
      <label>First Name:</label>
      <input
        {...register("firstName", {
          required: "First name is required",
          validate: (fieldName) => {
            return fieldName !== "Athulya" || "Enter another name";
          },
        })}
      />
      {errors.firstName && <span>{errors.firstName.message}</span>}

      {/* Email Input Field */}
      <label>Email:</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      {/* Submit Button */}
      <button type="submit" disabled={!isDirty || !isValid}>Submit</button>
      <button type="button" onClick={()=> {reset()}}>Reset</button>
    </form>
  );
}

export default MyForm;
