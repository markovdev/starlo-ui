import React, { useEffect, useState } from "react";

const Input = ({
  onChange,
  className,
  placeholder,
  value,
  id,
  type,
  options,
  isLight,
  label,
  min = 1,
  max = 32,
  validationMsg,
  disableVald,
  selId,
  name,
  isRequired = true,
}) => {
  const [errMsg, setErrMsg] = useState("");
  const checkValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const inputValueHandler = (e) => {
    const valLength = e.target.value.length;

    if (valLength < min) {
      setErrMsg(validationMsg);
      return (e.target.style.border = "1px solid red");
    }
    if (type === "email" && !checkValidEmail(e.target.value)) {
      return setErrMsg("Invalid email!");
    }
    setErrMsg("");
    return (e.target.style.border = "1px solid #ccc");
  };

  const getInputType = (inputType = "text", id, options) => {
    if (inputType === "select") {
      return (
        <select onChange={onChange} className="form__select" name={name}>
          {options.map((opt) => (
            <option value={opt.value} key={opt.label}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    }
    return (
      <input
        className={` ${className} form__input`}
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        minLength={min}
        maxLength={max}
        name={name}
        required={isRequired}
        key={selId || id}
        defaultValue={value || ""}
      />
    );
  };
  let inputEl = getInputType("text", id);
  if (type === "email") inputEl = getInputType("email", id);
  else if (type === "password") inputEl = getInputType("password", id);
  else if (type === "search") inputEl = getInputType("search", id);
  else if (type === "select") inputEl = getInputType("select", id, options);
  return (
    <div className="form__control">
      <label
        htmlFor={id}
        className={`form__label ${isLight ? "form__label--light" : ""}`}
      >
        {label}
      </label>

      {inputEl}
      {<p className="form__message">{errMsg}</p>}
    </div>
  );
};

export default Input;
