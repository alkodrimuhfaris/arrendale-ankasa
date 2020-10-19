import React from "react";
import "./style/style.css";
import {
  Button,
  Col, Form, Input, Label, Row,
} from "reactstrap";

// Import image
import logo from "../../Assets/logo-sm.svg";

// Import Component
import AuthSideBar from "../../Components/AuthSideBar";

class Signup extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Row>
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
                  <span className="h2 font-weight-bold">Register</span>
                </div>
                <Input type="text" className="border-bottom mb-3" placeholder="Full Name" />
                <Input type="email" className="border-bottom mb-3" placeholder="Email" />
                <Input type="password" className="border-bottom mb-3" placeholder="Password" />
                <Button color="primary" className="shadow mb-3 font-weight-bold" block>Sign Up</Button>
                <div className="pl-4">
                  <Label check>
                    <Input type="checkbox" />{" "}
                  Accept terms and condition
                  </Label>
                </div>
              </Form>
              <div>
                <hr/>
                <div className="text-center mb-3">
                  <span>Already have an account?</span>
                </div>
                <Button color="outline-primary" className="font-weight-bold" block>Sign In</Button>
              </div>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Signup;