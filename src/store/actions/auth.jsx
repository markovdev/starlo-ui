import axios from "../../axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const updateSTART = () => {
  return {
    type: "UPDATE_START",
  };
};
export const updateSuccess = (name, photo, email, token) => {
  return {
    type: actionTypes.UPDATE_SUCCESS,
    user: {
      name,
      photo,
      email,
      token,
    },
  };
};
export const authSuccess = (
  name,
  photo,
  role,
  token,
  status,
  isTwoFa,
  accessToken,
  userId,
  curIndex
) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    curIndex,
    role,
    isTwoFa,
    accessToken,
    status,
    userId,
    name,
    photo,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};
export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(`/users/login`, { email, password })
      .then((resBody) => {
        const expiresIn = new Date(new Date().getTime() + 2000);

        const {
          userId,
          status,
          token,
          isTwoFa,
          sendTwoFactorRequestToken,
          name,
          photo,
          role,
        } = resBody.data;

        localStorage.setItem(
          "user",
          JSON.stringify({
            name,
            photo,
            role,
            token,
          })
        );
        dispatch(
          authSuccess(
            name,
            photo,
            role,
            token,
            status,
            isTwoFa,
            sendTwoFactorRequestToken,
            userId
          )
        );
      })
      .catch((err) => {
        console.error(err?.response.data);
        dispatch(authFail(err?.response.data.message));
      });
  };
};
export const signup = (name, email, password, confirmPassword) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(`/users/signup`, {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((resBody) => {
        console.log(resBody);
        const expiresIn = new Date(new Date().getTime() + 2000);

        const {
          userId,
          status,
          token,
          isTwoFa,
          sendTwoFactorRequestToken,
          name,
          photo,
        } = resBody.data;

        dispatch(
          authSuccess(
            status,
            token,
            isTwoFa,
            sendTwoFactorRequestToken,
            userId,
            name,
            photo
          )
        );
      })
      .catch((err) => {
        console.error(err?.response.data);
        dispatch(authFail(err?.response.data.message));
      });
  };
};
export const update = (name, email, photo, role, token) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .patch(
        `/users/updateMe`,
        {
          name,
          email,
          photo,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user"))?.token,
          },
        }
      )
      .then((resBody) => {
        const { name, photo } = resBody.data?.data.user;
        console.log(name, photo);

        dispatch(updateSuccess(name, photo));
      })
      .catch((err) => {
        console.error(err?.response.data);
        dispatch(authFail(err?.response.data.message));
      });
  };
};
export const checkAuth = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.name);
    if (user) {
      dispatch(authSuccess(user.name, user.photo, user.role, user.token));
    }
  };
};
