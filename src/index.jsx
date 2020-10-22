/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./User/App";
import Admin from "./Admin/App";
import store from "./User/Redux/store";
import { Provider } from "react-redux";
import StoreAdmin from "./Admin/Redux/store";
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={StoreAdmin}>
      <Admin />
    </Provider>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
