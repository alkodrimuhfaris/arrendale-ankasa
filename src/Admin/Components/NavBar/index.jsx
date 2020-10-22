import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button, Col, Container, Input, Nav,
  Navbar, NavbarBrand, NavItem, Row,
} from "reactstrap";

import logo from "../../../User/Assets/logo.svg";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
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
              <Col md={3}>
                <Nav navbar>
                  <NavItem>
                    <Input className='input pl-5' style={{ height: 50 }} type='search' placeholder='Where you want to go?' />
                  </NavItem>
                </Nav>
              </Col>
              <Col md={2}>
                <Nav>
                  <NavItem>
                    <Link to="/manage/flight">
                      <Button>
                        Manage Flight
                      </Button>
                    </Link>
                  </NavItem>
                </Nav>
              </Col>
              <Col md={2}>
                <Nav>
                  <NavItem>
                    <Link to="/manage/user">
                      <Button>
                        Manage user
                      </Button>
                    </Link>
                  </NavItem>
                </Nav>
              </Col>
              <Col md={2}>
                <Nav>
                  <NavItem>
                    <Button>
                      Sign Up
                    </Button>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </>
    );
  }
}
