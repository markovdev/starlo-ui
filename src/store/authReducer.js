import updateObject from "../utils/updateObj";

const initialState = {
  error: null,
  user: null,
  isAuthenticated: false,
  loading: false,
};
const authStart = (state = initialState, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};
const authFail = (state = initialState, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};
const updateStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};
const authSuccess = (state, action) => {
  return updateObject(state, {
    user: {
      token: action.token,
      error: null,
      loading: false,
      isAuthenticated: true,
      userId: action.userId,
      name: action.name,
      photo: action.photo,
      role: action.role,
    },
  });
};
const updateSuccess = (state, action) => {
  return updateObject(state, {
    user: {
      name: action.name,
      email: action.email,
      photo: action.photo,
      token: action.token,
    },
    loading: false,
  });
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return authStart(state, action);
    case "AUTH_SUCCESS":
      return authSuccess(state, action);
    case "AUTH_FAIL":
      return authFail(state, action);
    case "UPDATE_START":
      return updateStart(state, action);
    case "UPDATE_SUCCESS":
      console.log("Auth success");
      return updateSuccess(state, action);
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export default authReducer;
