import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

// import rootReducer from "./store/reducers/index";
import rootReducer from "./store/reducers/index.js";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import store from "./store/store.js";

// const composeEnhancers =
//   (window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()) ||
//   compose;

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
