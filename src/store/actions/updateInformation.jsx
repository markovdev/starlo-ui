import * as actionTypes from "./actionTypes";
import axios from "../../axios";
export const updateStart = () => {
  return {
    type: actionTypes.UPDATE_START,
    loading: true,
  };
};
export const updateSuccess = (name, photo) => {
  console.log(name, photo);
  return {
    type: actionTypes.UPDATE_SUCCESS,
    name: name,
    photo: photo,
    staus: "success",
  };
};
export const update = (name, email, photo, role, token) => {
  return (dispatch) => {
    dispatch(updateStart());
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
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((resBody) => {
        console.log(role, token);
        const { name, photo } = resBody.data?.data.user;
        dispatch(updateSuccess(name, photo));
      })
      .catch((err) => {
        console.error(err);
        // dispatch(authFail(err?.response.data.message));
      });
  };
};
