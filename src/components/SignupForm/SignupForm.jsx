import React, { useCallback, useState } from "react";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form";
import useValidatePasswords from "../../hooks/useValidatePasswords";
import useSignup from "../../hooks/useSignup";
import { useSelector } from "react-redux";

const SignupForm = ({ onSubmit, isLoading }) => {
  const { token, error, loading } = useSelector((state) => state.auth);
  console.log(loading);
  const { handler, password, confirmPassword, isDisabled } =
    useValidatePasswords();
  const { signup } = useSignup();
  console.log(isDisabled);
  const signupHandler = useCallback((e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    signup(name, email, password, confirmPassword);
  });
  return (
    <Form
      className="form"
      onSubmit={signupHandler}
      msg={
        password !== confirmPassword && confirmPassword !== ""
          ? "Passwords does not match!"
          : ""
      }
    >
      <Input label="Full Name" id="name" />
      <Input label="Email" id="email" />
      <Input
        type="password"
        label="Password"
        name="password"
        id="password"
        onChange={handler}
      />
      <Input
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={handler}
      />
      <Button type="submit" id="name" isLoading={loading} disabled={isDisabled}>
        Signup
      </Button>
    </Form>
  );
};

export default SignupForm;
