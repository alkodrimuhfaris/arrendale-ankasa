import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import {
  Button, Col, Container, Input, Nav,
  Navbar, NavbarBrand, NavItem, Row,
  NavLink,
} from "reactstrap";
import "./style/style.css";

// import image
import logo from "../../Assets/logo.svg";
import search from "../../Assets/search.svg";
import mail from "../../Assets/mail.svg";
import bell from "../../Assets/bell.svg";
import profile from "../../Assets/profile.jpg";
import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      isLogin: false,
      isAdmin: false
    };
  }

  render() {
    return (
      <>
        <Navbar>
          <Container className='my-2'>
            <Row className='w-100 d-flex align-items-center'>
              <Col md={3}>
                <NavbarBrand>
                  {/* <Link to='/'>
                    <img src={logo} alt='logo ankasa' />
                  </Link> */}
                  <img src={logo} alt='logo ankasa' />
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
                    <NavLink className="text-center" href="#">
                      My Booking
                    </NavLink>
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
                    <img className="img-rounded rounded-circle" src={profile} alt="profile" />
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
