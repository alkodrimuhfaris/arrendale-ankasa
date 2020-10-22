/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./styled/style.css";
import { Button, Card, CardBody, Col, Container, Form, FormText, Input, Row } from "reactstrap";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/SideBar";

import profileAction from "../../Redux/actions/profile";

export default function Profile() {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const token = useSelector((state) => state.auth.token);
  const { data } = useSelector((state) => state.profile);
  // const form = new FormData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length) {
      setUsername(data[0].username);
      setEmail(data[0].email);
      setPhone(data[0].phone);
      setCity(data[0].city);
      setAddress(data[0].address);
      setPostalCode(data[0].postal_code);
      setAvatar(data[0].avatar);
    }
  }, [data]);
  useEffect(() => {
    dispatch(profileAction.getProfile(token));
  }, [dispatch, token]);
  
  return (
    <>
      <Navbar />
      <div className='content-wrapper w-100' style={{backgroundColor: "#F5F6FA"}}>
        <Container>
          <Row className='py-5'>
            <Col md={3} className='sidebar p-3'>
              {console.log(avatar)}
              <Sidebar name={username} profile={avatar} address={address} />
            </Col>
            <Col md={9}>
              <Card className='py-3'>
                <CardBody>
                  <span className='small' style={{color: "#2395FF"}}>P R O F I L E</span>
                  <div className='font-weight-bold h4 mt-2'>Profile</div>
                  <Row className='mt-4'>
                    <Col md={6} className='font-weight-bold'>
                      Contact
                    </Col>
                    <Col md={6} className='font-weight-bold'>
                      Biodata
                    </Col>
                    <Col md={12}>
                      <Form className='w-100'>
                        <Row>
                          <Col md={6} className='my-2'>
                            <FormText>
                              Email
                            </FormText>
                            <Input 
                              className='styled-input' 
                              aria-label='email' 
                              type='email'
                              placeholder='exemple@mail.com'
                              value={email} />
                          </Col>
                          <Col md={6} className='my-2'>
                            <FormText>
                              Username
                            </FormText>
                            <Input 
                              className='styled-input' 
                              aria-label='username' 
                              type='text'
                              placeholder='Full Name'
                              value={username} />
                          </Col>
                          <Col md={6} className='my-2'>
                            <FormText>
                              Phone Number
                            </FormText>
                            <Input 
                              className='styled-input' 
                              aria-label='phoneNumber' 
                              type='text'
                              placeholder='Add your phone number'
                              value={phone} />
                          </Col>
                          <Col md={6} className='my-2'>
                            <FormText>
                              City
                            </FormText>
                            <Input 
                              className='styled-input' 
                              aria-label='city' 
                              type='text'
                              placeholder='Add your city'
                              value={city} />
                          </Col>
                          <Col md={6} className='my-2 d-flex align-items-center justify-content-end'>
                            <div className='font-weight-bold'
                              style={{color: "#2395FF"}}>
                                Account Settings   <FaChevronRight />
                            </div>
                          </Col>
                          <Col md={6} className='my-2'>
                            <FormText>
                              Address
                            </FormText>
                            <Input 
                              className='styled-input' 
                              aria-label='Address' 
                              type='text'
                              placeholder='Add your address'
                              value={address} />
                          </Col>
                          <Col md={6} className='my-2' />
                          <Col md={6} className='my-2'>
                            <FormText>
                              Post Code
                            </FormText>
                            <Input 
                              className='styled-input' 
                              aria-label='postcode' 
                              type='text'
                              placeholder='Add your post code'
                              value={postalCode} />
                          </Col>
                          <Col md={6} className='mt-3' />
                          <Col md={6} className='mt-3 d-flex justify-content-end'>
                            <Button className='btn-1 font-weight-bold py-2 px-5'>Save</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
