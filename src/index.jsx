/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./User/App";
import Admin from "./Admin/App";
import store from "./User/Redux/store";
import { Provider } from "react-redux";
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Admin />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
