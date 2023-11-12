// import { auth } from "./actions";
// import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
// import devToolsEnhancer from "remote-redux-devtools";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
