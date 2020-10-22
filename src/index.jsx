import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./User/App";
import Admin from "./Admin/App";
import {Provider} from "react-redux"
import storeAdmin from "./Admin/Redux/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeAdmin}>
      <Admin />
    </Provider>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
