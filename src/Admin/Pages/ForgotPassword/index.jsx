/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import "./style/style.css";
import loginAction from '../../Redux/actions/auth'

import {
  Button,
  Col, Form, Input, Row,
} from "reactstrap";

// Import image
import logo from "../../Assets/logo-xs.svg";

// Import Component
import AuthSideBar from "../../Components/AuthSideBar";


export default function ForgotPassword(props) {
  
  const [email, setEmail] = useState('')
  const [reset_code, setResetCode] = useState('')
  const dispatch = useDispatch()

  const reset = (e) => {
    e.preventDefault()
    
      setTimeout(() =>{
        dispatch(loginAction.resetPassword(email))
    }, 500)
  }

  const user = useSelector(state=>state.auth)
  const { isLoginAdmin, tokenAdmin, isSuccess } = user
  useEffect(()=>{
    // console.log(props.location.state)
  if (isSuccess) {
    setTimeout(()=>{
      alert('success')
      // props.history.push('/manage/user')
        // props.history.push(props.location.state ? props.location.state.location: '/')
    }, 300)
    // props.history.push('/')
  }
}, [isSuccess, props, dispatch])

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
                <Input type="text" name="reset_code" style={!isSuccess ? {display: 'none'} : {display: 'block'}} value={reset_code} onChange={(e)=>{setResetCode(e.target.value)}} className="border-bottom mb-3" placeholder="reset code" />
                <Input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border-bottom mb-3" placeholder="Email" required />
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