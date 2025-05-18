import React from "react";
import FormBoilerplate from "./FormBoilerplate";

const MyForm = () => {
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      validation: { required: "Email is required" },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      validation: { required: "Password is required" },
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      options: [
        { label: "User", value: "user" },
        { label: "Admin", value: "admin" },
      ],
      validation: { required: "Role is required" },
    },
    { name: "subscribe", label: "Subscribe to newsletter", type: "checkbox", validation: { required: "Role is required" }, },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
      validation: { required: "Role is required" },
    },
  ];

  const handleFormSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return <FormBoilerplate fields={fields} onSubmitForm={handleFormSubmit} />;
};

export default MyForm;
