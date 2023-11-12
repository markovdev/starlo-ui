export const authStart = () => ({
  type: "AUTH_START",
  loading: true,
});
export const authSuccess = (name, photo, token, role) => {
  return {
    type: "AUTH_SUCCESS",
    name,
    photo,
    token,
    role,
    loading: false,
  };
};
export const updateStart = () => {
  return {
    type: "UPDATE_START",
    loading: true,
  };
};
export const authFail = (error) => {
  return {
    type: "AUTH_FAIL",
    error,
  };
};
export const updateSuccess = (name, email, photo, token, role) => {
  console.log(name, photo, token, role);
  return {
    type: "UPDATE_SUCCESS",
    name,
    email,
    photo,
    token,
    role,
    loading: false,
  };
};

export const signup = () => ({
  type: "SIGNUP",
});
export const updateUserData = () => ({
  type: "UPDATE_USER_DATA",
});
export const reviewStart = (state, action) => {
  return {
    type: "REVIEW_START",
    error: null,
    loading: true,
  };
};
export const reviewRes = (room) => ({
  type: "REVIEW_RESPONSE",
  room,
  loading: false,
});
export const logout = () => {
  return {
    type: "LOGOUT",
    auth: null,
    user: null,
    name: null,
    photo: null,
    token: null,
    role: null,
  };
};
