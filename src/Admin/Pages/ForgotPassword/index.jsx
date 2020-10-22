import React from "react";
import "./style/style.css";
import {
  Button,
  Col, Form, Input, Row,
} from "reactstrap";

// Import image
import logo from "../../Assets/logo-xs.svg";

// Import Component
import AuthSideBar from "../../Components/AuthSideBar";

class ForgotPassword extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Row className="vh-100 vw-100">
          <AuthSideBar />
          <Col md={5} className="vh-100 w-100 px-5 py-3">
            <div className="head-signup d-flex align-items-center">
              <img className="logo mr-3" src={logo} alt="logo"/>
              <div>
                <span className="h4 font-weight-bold">Ankasa</span>
              </div>
            </div>
            <div className="body-signup d-flex flex-column justify-content-center">
              <Form>
                <div className="mb-3">
                  <span className="h2 font-weight-bold">Forgot Password</span>
                </div>
                <Input type="email" className="border-bottom mb-3" placeholder="Email" />
                <Button color="primary" className="shadow mb-3 font-weight-bold" block>Send</Button>
                <div className="text-sm text-center text-muted">
                  <span>You&apos;ll get message soon on your email</span>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;