/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {
  Button, Col, Container, Nav,
  Navbar, NavbarBrand, NavItem, Row,
} from "reactstrap";
import authAction from "../../Redux/actions/auth";
import profileAction from "../../Redux/actions/profile";

import logo from "../../../User/Assets/logo.svg";
export default function NavigationBar(props) {
  const token = useSelector(state=>state.auth.token);
  const adminProfile = useSelector(state=>state.profile);
  const dispatch = useDispatch();
  

  const logout = () => {
    dispatch(authAction.logoutAdmin());
  };

  useEffect(()=>{
    dispatch(profileAction.getProfile(token));
  },[dispatch, token]);

  const {data} = adminProfile;

  // useEffect(()=>{
  //   console.log(data);
  // },[data]);
  const [avatar, setAvatar] = useState("");
  useEffect(()=>{
    if (data.length) {
      setAvatar(data[0].avatar);
      // console.log(data[0].avatar);
      // console.log(avatar)
    }
  },[data]);
  return (
    <>
      <Navbar className="sticky-top bg-light">
        <Container>
          <Row className='w-100 d-flex align-items-center'>
            <Col md={3}>
              <NavbarBrand>
                <Link to='/'>
                  <img src={logo} alt='logo ankasa' />
                </Link>
              </NavbarBrand>
            </Col>
            <Col md={9}>
              <Nav></Nav>
              <Nav className="d-flex flex-row justify-content-center align-items-center">
                <NavItem className="ml-auto pr-3">
                  <Link to="/admin/login" className="text-black font-weight-bold" onClick={logout}>
                    Log out                    
                  </Link>
                  <div style={{borderBottom: "4px solid #000000"}} className="mt-2"></div>
                </NavItem>
                <NavItem className="mt-3" style={{position: "relative", width: "48px", height: "50px", overflow: "hidden"}}>
                  <div style={{width: "35px", height: "35px", backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL+avatar})`, backgroundSize: "cover", display: "block", backgroundPosition: "center",borderRadius: "100px", BorderRadius: "100px"}}></div>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
