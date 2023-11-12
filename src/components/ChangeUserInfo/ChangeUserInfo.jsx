import React, { useCallback, useEffect } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import useHttp from "../../hooks/http";
import Message from "../UI/Message/Message";
import Form from "../UI/Form/Form";
import Heading from "../Typography/Heading";
import { API_URL, FULL_PATH } from "../../config";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Loader from "../UI/Loader/Loader";
import authState from "../../utils/authState";
import useUpdate from "../../hooks/useUpdate";
import useLocalStorage from "../../hooks/useLocalStorage";
const ChangeUserInfo = ({ role, token, loading, updateStatus, auth }) => {
  const [user, setNewUser] = useLocalStorage("user");
  const { update, message, isLoading } = useUpdate();
  const {
    sendRequest: getUserInfo,
    data: userInfo,
    error,
    isLoading: getUserInfoLoading,
  } = useHttp();
  useEffect(() => {
    getUserInfo(`/users/me`, "GET", true);
  }, [auth?.user]);
  const updateInformationHandler = useCallback((e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const userPhoto = document.getElementById("photo").files[0];
    console.log(name, userPhoto);
    update(name, email, userPhoto);
  }, []);

  return (
    <div className="change-info">
      {error && error?.response.status === 429 && (
        <Message text={error.response.data} error />
      )}
      {getUserInfoLoading && <Loader isFull />}
      {error && <Message text={error?.response.data.message} error />}
      {message && <Message text={message} />}
      <Heading text="Change information" isTertiary />
      <Form onSubmit={updateInformationHandler}>
        <Input
          label="Full Name"
          id="name"
          value={userInfo?.data.doc.name}
          validationMsg="Your name must be 6 characters or more!"
        />
        <Input
          label="Email"
          type="email"
          id="email"
          value={userInfo?.data.doc.email}
        />

        <div className="form__control u-flex u-flex--center">
          {" "}
          <img
            src={`${FULL_PATH}/img/users/${userInfo?.data.doc.photo}`}
            alt="User photo on Starlo"
            className="form__img"
          />
          <label className="form__label form__label--file" htmlFor="photo">
            Change photo
          </label>
          <input
            className="form__input--file"
            type="file"
            name="photo"
            accept="image/*"
            id="photo"
          />
        </div>
        <Button type="submit" isInline isLoading={isLoading}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ChangeUserInfo;
