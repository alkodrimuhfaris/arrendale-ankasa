/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./styled/style.css";
import { 
  Button, Card, CardBody, Col, Container, Form, 
  FormText, Input, Modal, ModalBody, ModalFooter, Row 
} from "reactstrap";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/SideBar";

import profileAction from "../../Redux/actions/profile";
import authAction from "../../Redux/actions/auth";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [alertOpen, setAlert] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { data, alertMsg } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 200);
  }, []);

  const getData = () => {
    dispatch(profileAction.getProfile(token));
  };
  
  useEffect(() => {
    if (data.length) {
      setUsername(data[0].username);
      setEmail(data[0].email);
      setPhone(data[0].phone_number);
      setCity(data[0].city);
      setAddress(data[0].address);
      setPostalCode(data[0].postal_code);
    }
    if(alertMsg!==""){
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [data, alertMsg]);

  const saveChange = (e) => {
    e.preventDefault();
    const body = {
      username,
      email,
      phone_number: phone,
      city,
      address,
      postal_code: postalCode
    };
    dispatch(profileAction.editProfile(token, body));
  };

  const closeModal = () => {
    setAlert(false);
    getData();
  };

  const relogin = () => {
    dispatch(authAction.relogin());
  };

  return (
    <>
      <Navbar />
      <div className='content-wrapper w-100' style={{backgroundColor: "#F5F6FA"}}>
        <Container>
          <Row className='py-5'>
            <Col md={3} className='sidebar p-3'>
              <Sidebar from='profile' />
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
                      <Form onSubmit={saveChange} className='w-100'>
                        <Row>
                          <Col md={6} className='my-2'>
                            <FormText>
                              Email
                            </FormText>
                            <Input 
                              onChange={(e)=>setEmail(e.target.value)}
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
                              onChange={(e)=>setUsername(e.target.value)}
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
                              onChange={(e)=>setPhone(e.target.value)}
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
                              onChange={(e)=>setCity(e.target.value)}
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
                              onChange={(e)=>setAddress(e.target.value)}
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
                              onChange={(e)=>setPostalCode(e.target.value)}
                              className='styled-input' 
                              aria-label='postcode' 
                              type='text'
                              placeholder='Add your post code'
                              value={postalCode} />
                          </Col>
                          <Col md={6} className='mt-3' />
                          <Col md={6} className='mt-3 d-flex justify-content-end'>
                            <Button type='submit' className='btn-1 font-weight-bold py-2 px-5'>Save</Button>
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
      <Modal centered isOpen={alertOpen}>
        <ModalBody>
          <Row className='d-flex align-items-center'>
            <Col md={9}>
              <div className='text-center'>
                {alertMsg==="jwt expired"
                  ? "Session has ended. Please login again!"
                  : alertMsg}
              </div>
            </Col>
            {alertMsg!=="jwt expired" && (
              <Col md={3} className='d-flex justify-content-end'>
                <Button onClick={closeModal}>
                  <FaTimes />
                </Button>
              </Col>
            )}
          </Row>
        </ModalBody>
        {alertMsg==="jwt expired" && (
          <ModalFooter>
            <Button onClick={relogin} className='btn-1 px-4'>Login</Button>
          </ModalFooter>
        )}
      </Modal>
    </>
  );
}
