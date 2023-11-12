import React, { useCallback, useReducer, useState } from "react";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { authSuccess, signup, authStart, authFail } from "../store/actions";
import { useNavigate, useNavigation } from "react-router";
const initialState = {
  loading: false,
  error: null,
  data: null,
  identifier: null,
  status: null,
};
const loginReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        identifier: action.identifier,
        status: null,
      };
    case "RESPONSE":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
        status: action.status,
      };
    case "ERROR":
      return {
        loading: false,
        error: action.error,
      };
  }
};

const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = useCallback((name, email, password, confirmPassword) => {
    dispatch(authStart());
    axios
      .post(`/users/signup`, { name, email, password, confirmPassword })
      .then((resBody) => {
        console.log(resBody?.data);
        const expiresIn = new Date(new Date().getTime() + 2000);
        const { token, name, photo, role } = resBody.data;
        localStorage.setItem(
          "user",
          JSON.stringify({
            name,
            photo,
            role,
            token,
          })
        );
        dispatch(authSuccess(name, photo, token, role));
        navigate("/");
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.message));
      });
  });

  return { signup };
};

export default useSignup;
