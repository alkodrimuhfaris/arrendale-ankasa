import React from "react";
import {Link} from 'react-router-dom'
import "./style/style.css";
import {
  Alert,
  Button,
  Col, Form, Input, Label, Row,
} from "reactstrap";

// Import image
import logo from "../../Assets/logo-sm.svg";

// Import Component
import AuthSideBar from "../../Components/AuthSideBar";

import authAction from '../../Redux/actions/auth'
import { connect } from "react-redux";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  onChangeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  register = (e) => {
    e.preventDefault()
    const {username, email, password} = this.state
    const data = {
      username,
      email,
      password
    }
    this.props.register(data)
    !this.props.auth.isError && this.props.history.push('/login')
  }

  render(){
    const {alertMsg, isError} = this.props.auth
    return (
      <React.Fragment>
        <Row className="vh-100 vw-100">
          <AuthSideBar />
          <Col md={5} className="vh-100 w-100 px-5 py-3">
            <div className="head-signup d-flex align-items-center">
              <img className="logo mr-3" src={logo} alt="logo" />
              <div>
                <span className="h4 font-weight-bold">Ankasa</span>
              </div>
            </div>
            <div className="body-signup d-flex flex-column justify-content-center">
              <div>
                <Alert width={100}
                isOpen={alertMsg!==''}
                color={isError?'danger':'success'}
                className='text-center'>{alertMsg}</Alert>
              </div>
              <Form onSubmit={this.register}>
                <div className="mb-3">
                  <span className="h2 font-weight-bold">Register</span>
                </div>
                <Input onChange={this.onChangeText} name='username' type="text" className="border-bottom mb-3" placeholder="Full Name" />
                <Input onChange={this.onChangeText} name='email' type="email" className="border-bottom mb-3" placeholder="Email" />
                <Input onChange={this.onChangeText} name='password' type="password" className="border-bottom mb-3" placeholder="Password" />
                <Button type='submit' color="primary" className="shadow mb-3 font-weight-bold" block>Sign Up</Button>
                <div className="pl-4">
                  <Label check>
                    <Input type="checkbox" />{" "}
                  Accept terms and condition
                  </Label>
                </div>
              </Form>
              <div>
                <hr />
                <div className="text-center mb-3">
                  <span>Already have an account?</span>
                </div>
                <Link to="/login"><Button color="outline-primary" className="font-weight-bold text-white" block>Sign In</Button></Link>
              </div>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  register: authAction.register
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);