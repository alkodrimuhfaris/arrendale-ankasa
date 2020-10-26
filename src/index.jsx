/* eslint-disable no-undef */
// DONT TOUCH THIS FILE PLEASE
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import App from "./User/App";
import Admin from "./Admin/App";
import store from "./User/Redux/store";
import storeAdmin from "./Admin/Redux/store";

// DONT TOUCH THIS FILE PLEASE
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeAdmin}>
      <Admin />
    </Provider>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
