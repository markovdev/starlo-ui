import React, { useCallback, useEffect, useState } from "react";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import useHttp from "../../hooks/http";
import Message from "../UI/Message/Message";
import Heading from "../Typography/Heading";
import useValidatePasswords from "../../hooks/useValidatePasswords";
const ChangeUserPassword = () => {
  const { handler, password, confirmPassword, isDisabled } =
    useValidatePasswords();
  const { sendRequest, data, status, error, isLoading } = useHttp();

  const updatePasswordHandler = useCallback((e) => {
    e.preventDefault();
    const currentPassword = document.getElementById("curPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const newConfirmPassword =
      document.getElementById("confirmNewPassword").value;
    sendRequest(`/users/updateMyPassword`, "PATCH", true, {
      currentPassword,
      newPassword,
      newConfirmPassword,
    });
  }, []);
  if (status === "success") {
    localStorage.setItem(
      "user",
      JSON.stringify({
        userId: data.userId,
        token: data.token,
        role: data.role,
      })
    );
  }

  return (
    <div className="change-info">
      {" "}
      {error && <Message text={error.response.data.message} error />}
      {status && <Message text="Password updated successfully!" />}
      <Heading text="Change Password" isTertiary />
      <Form
        onSubmit={updatePasswordHandler}
        msg={
          password !== confirmPassword && confirmPassword !== ""
            ? "Passwords does not match!"
            : ""
        }
      >
        <Input
          label="Current Password"
          type="password"
          name="curPassword"
          onChange={handler}
        />
        <Input
          label="New Password"
          type="password"
          name="password"
          onChange={handler}
        />
        <Input
          label="Confirm New Password"
          type="password"
          name="confirmPassword"
          onChange={handler}
        />
        <Button
          type="submit"
          isInline
          isLoading={isLoading}
          disabled={isDisabled}
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ChangeUserPassword;
