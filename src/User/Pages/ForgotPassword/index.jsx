/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import "./styled/style.css";
import forgotPasswordAction from "../../Redux/actions/forgotPassword";

import {
  Button,
  Col, Form, Input, Row, Modal,
  ModalBody, ModalFooter
} from "reactstrap";

// Import image
import logo from "../../Assets/logo-sm.svg";

// Import Component
import AuthSideBar from "../../Components/AuthSideBar";


export default function ForgotPassword(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [resetcode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const dispatch = useDispatch();

  const reset = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordAction.resetPassword({email: email}));
  };

  const updatePassword = (e) => {
    e.preventDefault();
    let result = {
      email,
      resetcode,
      newPassword,
      confirmNewPassword
    };
    setTimeout(() =>{
      dispatch(forgotPasswordAction.updatePassword(result));
    }, 500);
  };

  const forgot = useSelector(state=>state.forgotPassword);
  const { isSuccess, isMatch, isError, alertMsg, isSended, isLoading } = forgot;
  useEffect(()=>{
    // console.log(props.location.state)
    if (isMatch) {
      setModalOpen(true);
      setMessage("Reset code match");
      setTimeout(() =>{
        props.history.push("/login");
      }, 5000);
    }
  }, [isSuccess, isMatch, dispatch, props]);

  useEffect(() => {
    if (isSended) {
      setModalOpen(true);
      setMessage(alertMsg);
    }
  },[isSended]);
  useEffect(() => {
    if (!isMatch && isError) {
      setModalOpen(true);
      setMessage("Password code doesnt match");
      setResetCode("");
      setNewPassword("");
      setConfirmNewPassword("");
      setTimeout(() =>{
        dispatch(forgotPasswordAction.clearMessageStatus());
      },7000);
    }
  },[isMatch, isError, dispatch]);
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
            <Form onSubmit={reset} style={isSuccess ? {display: "none"} : {display: "block"}}>
              <div className="mb-3">
                <span className="h2 font-weight-bold">Forgot Password</span>
              </div>
              <Input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value);}} className="border-bottom mb-3" placeholder="Email" required />
              <Button color="primary" type="submit" className="shadow mb-3 font-weight-bold" block>Send</Button>
              <div className="text-sm text-center text-muted">
                <span>You&apos;ll get message soon on your email</span>
              </div>
            </Form>

            <Form onSubmit={updatePassword} style={!isSuccess? {display: "none"} : {display: "block"}}>
              <div className="mb-3">
                <span className="h2 font-weight-bold">Forgot Password</span>
              </div>
              <Input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value);}} className="border-bottom mb-3" placeholder="Email" required />
              <Input type="text" name="resetcode" value={resetcode} onChange={(e)=>{setResetCode(e.target.value);}} className="border-bottom mb-3" placeholder="reset code" />
              <Input type="password" name="newPassword" style={resetcode.length < 5? {display: "none"} : {display: "block"}} value={newPassword} onChange={(e)=>{setNewPassword(e.target.value);}} className="border-bottom mb-3" placeholder="New password" />
              <Input type="password" name="confirmNewPassword" style={resetcode.length < 5? {display: "none"} : {display: "block"}} value={confirmNewPassword} onChange={(e)=>{setConfirmNewPassword(e.target.value);}} className="border-bottom mb-3" placeholder="Confirm new password" />
              
              <Button color="primary" type="submit" className="shadow mb-3 font-weight-bold" block>Send</Button>
              <div className="text-sm text-center text-muted">
                <span>You&apos;ll get message soon on your email</span>
              </div>
            </Form>
          </div>
        </Col>
        <>
          <Modal isOpen={modalOpen} style={{marginTop: "100px"}}>
            <ModalBody>
              <div className="d-flex justify-content-around flex-row">
                {message}
                <Button onClick={()=>{setModalOpen(false);}}>
                Close
                </Button>
              </div>
            </ModalBody>
          </Modal>
        </>
      </Row>
    </React.Fragment>
  );
}