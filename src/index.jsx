import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./User/App";
import Admin from "./Admin/App";

ReactDOM.render(
  <React.StrictMode>
    <Admin />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
