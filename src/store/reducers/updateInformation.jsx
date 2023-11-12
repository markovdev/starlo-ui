import * as actionTypes from "../actions/actionTypes";
const initialState = {
  photo: null,
  name: null,
};
const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

const updateStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};
const updateSuccess = (state, action) => {
  console.log(action.name, action.photo);
  return updateObject(state, {
    name: null || action.name,
    photo: null || action.photo,
    status: "success",
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_START:
      return updateStart(state, action);
    case actionTypes.UPDATE_SUCCESS:
      return updateSuccess(state, action);
    default:
      return state;
  }
};
export default reducer;
