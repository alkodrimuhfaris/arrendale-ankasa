import React from "react";
import { Col } from "reactstrap";

// Import image
import image from "../../Assets/logo-sm.svg";

class AuthSideBar extends React.Component {
  render() {
    return (
      <Col md={7} className="vh-100 w-100 bg-primary p-0">
        <div className="d-flex align-items-center justify-content-center
            w-100 h-100">
          <img src={image} alt="ilustration" />
        </div>
      </Col>
    );
  }
}

export default AuthSideBar;