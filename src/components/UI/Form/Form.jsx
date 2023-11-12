import React from "react";

const Form = ({ onSubmit, children, className, isCol, msg }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <form
      className={`form ${isCol ? "form--col" : ""} ${
        className ? className : ""
      }`}
      onSubmit={handleFormSubmit}
    >
      <p className="form__error">{msg || ""}</p>
      {children}
    </form>
  );
};

export default Form;
