/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import loginAction from "../../Redux/actions/auth";
import "./styled/style.css";
import {
  Button,
  Col, Form, Input, Row, Alert 
} from "reactstrap";

// Import image
import logo from "../../Assets/logo-xs.svg";
import googleImg from "../../Assets/google.svg";
import facebookImg from "../../Assets/facebook.svg";
import view from "../../Assets/view.png";

// Import Component
import AuthSideBar from "../../Components/AuthSideBar";
import { Link } from "react-router-dom";

import manageUserAction from "../../Redux/actions/manageUser";

export default function Login(props) {

  const [modalOpen, setModalOpen] = useState(false);
  const [closeModal] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [alertColor, setAlertColor] = useState("info");

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    let data = {
      email,
      password
    };
    setTimeout(() =>{
      dispatch(loginAction.loginAdmin(data));
    }, 500);
  };

  const user = useSelector(state=>state.auth);
  const { isLoginAdmin, alertMsgAdmin, isErrorAdmin, token } = user;
  useEffect(()=>{
    if (isLoginAdmin) {
      setModalOpen(true);
      setAlertColor("info");
      setMessage(alertMsgAdmin);
      props.history.push("/admin/home");
    }
    if (isErrorAdmin) {
      setAlertColor("danger");
      setModalOpen(true);
      setMessage(alertMsgAdmin);
    }
  }, [isLoginAdmin, props, dispatch, token, isErrorAdmin]);

  const passwordReveal = () => {
    setShow(!show);
  };
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
            <Form onSubmit={login}>
              <div className="mb-3">
                <span className="h2 font-weight-bold">Login</span>
              </div>
              <Alert color={alertColor} isOpen={modalOpen} toggle={()=>{setModalOpen(!modalOpen);}}>
                {message}
              </Alert>
              <Input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value);}} className="border-bottom mb-3" placeholder="Email" required />
              <div className="d-flex">
                <Input type={!show ? "password" : "text"} name="password" value={password} onChange={(e)=>{setPassword(e.target.value);}}  className="border-bottom mb-3" placeholder="Password" required />
                <div className="position-absolute view">
                  <Button outline='light' onClick={passwordReveal} className="btnview" size="sm">
                    <img src={view} alt="view" />
                  </Button>
                </div>
              </div>
              <Button color="primary" type='submit' className="shadow mb-3 font-weight-bold" block>Sign In</Button>
              <div className="text-center">
                <div>
                  <span>Did you forget your password?</span>
                </div>
                {/* <div>
                  <Link to="/admin/forgot-password">
                    <span>Tap here for reset</span>
                  </Link>
                </div> */}
              </div>
            </Form>
            <div>
              <hr/>
              <div className="text-center mb-3">
                <span>or sign in with</span>
              </div>
              <div className="d-flex justify-content-center">
                <Button color="outline-primary" className="btn-img font-weight-bold mr-3">
                  <img src={googleImg} alt="google" />
                </Button>
                <Button color="outline-primary" className="btn-img font-weight-bold">
                  <img src={facebookImg} alt="facebook" />
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}