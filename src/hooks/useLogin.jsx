import React, { useCallback, useReducer, useState } from "react";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { authSuccess, signup, authStart, authFail } from "../store/actions";
import { useNavigate } from "react-router";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const loginHandler = useCallback((email, password) => {
    dispatch(authStart());
    setIsLoading(true);
    axios
      .post("/users/login", { email, password })
      .then((resBody) => {
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
        setIsLoading(false);

        dispatch(authSuccess(name, photo, token, role));
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err.response.data.message);
        dispatch(authFail(err.response.data.message));
        // Dispatch login error
        // dispatchLogin({
        //   type: "ERROR",
        //   error: err,
        // });
      });
  });

  return { loginHandler, isLoading };
};

export default useLogin;
