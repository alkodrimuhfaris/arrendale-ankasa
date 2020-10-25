/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import {
  Button, Col, Container, Input, Nav,
  Navbar, NavbarBrand, NavItem, Row,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style/style.css";

// import image
import logo from "../../Assets/logo.svg";
import search from "../../Assets/search.svg";
import mail from "../../Assets/mail.svg";
import bell from "../../Assets/bell.svg";
import profile from "../../Assets/profile.jpg";

const { REACT_APP_BACKEND_URL } = process.env;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      isLogin: false,
      isAdmin: false,
      token: "",
      modalOpen: false
    };
  }

  async componentDidMount() {
    await this.props.auth;
    this.setState({
      isLogin: this.props.auth.isLogin,
      token: this.props.auth.token,
    });
  }

  render() {
    const { avatar } = this.props.profile;
    return (
      <>
        <Navbar className="bg-white">
          <Container className='my-2'>
            <Row className='w-100 d-flex align-items-center'>
              <Col md={3}>
                <NavbarBrand>
                  <Link to='/'>
                    <img src={logo} alt='logo ankasa' />
                  </Link>
                </NavbarBrand>
              </Col>
              {this.state.isAdmin ? (
                <Col md={9} className='d-flex justify-content-end'>
                  <Nav className='text-right'>
                    <NavItem>
                      <NavLink className="text-center text-decoration-none" href="#">
                      User
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="text-center text-decoration-none" href="#">
                      Ticket
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              ) : (
                <Col md={3}>
                  <Nav navbar>
                    <NavItem>
                      <Input className='input-search position-relative pl-5 navbar-input' style={{ height: 50 }} type='search' placeholder='Where you want to go?' />
                      <img className="icon-search position-absolute" src={search} alt="search"/>
                    </NavItem>
                  </Nav>
                </Col>
              )}
              {!this.state.isAdmin && (
                <Nav tabs className="border-0">
                  <NavItem>
                    <NavLink className="text-center text-decoration-none" href="#">
                      Find Ticket
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Link className="text-center nav-link" to="/booking">
                      My Booking
                    </Link>
                  </NavItem>
                </Nav>
              )}
              {!this.state.isLogin && !this.state.isAdmin && (
                <Nav className="d-flex flex-fill justify-content-end">
                  <NavItem>
                    <Link to='/signup'>
                      <Button color="primary" className="btn-signup font-weight-bold shadow">
                      Sign Up
                      </Button>
                    </Link>
                  </NavItem>
                </Nav>
              )}
              {this.state.isLogin && (
                <Nav className="d-flex flex-fill justify-content-end">
                  <NavItem className="d-flex align-items-center justify-content-center wrapper-icon mr-4">
                    <img src={mail} alt="mail" />
                  </NavItem>
                  <NavItem className="d-flex align-items-center justify-content-center wrapper-icon mr-4">
                    <img src={bell} alt="bell" />
                  </NavItem>
                  <NavItem className="rounded-circle d-flex align-items-center justify-content-center wrapper-icon profile">
                    <Link to='/profile'>
                      <img className="img-rounded rounded-circle" 
                        src={avatar
                          ?REACT_APP_BACKEND_URL.concat(avatar)
                          :profile} alt="profile" />
                    </Link>
                  </NavItem>
                </Nav>
              )}
            </Row>
          </Container>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(NavigationBar);