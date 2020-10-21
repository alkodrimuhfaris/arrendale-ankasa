import React, { Component } from "react";
import "./styled/style.css";

import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/SideBar";
import { Button, Card, CardBody, Col, Container, Form, FormText, Input, Row } from "reactstrap";
import { FaChevronRight } from "react-icons/fa";

export default class Profile extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className='content-wrapper w-100' style={{backgroundColor: "#F5F6FA"}}>
          <Container>
            <Row className='py-5'>
              <Col md={3} className='sidebar p-3'>
                <Sidebar />
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
                                value='email@mail.com' />
                            </Col>
                            <Col md={6} className='my-2'>
                              <FormText>
                                Username
                              </FormText>
                              <Input 
                                className='styled-input' 
                                aria-label='username' 
                                type='text'
                                value='Mike' />
                            </Col>
                            <Col md={6} className='my-2'>
                              <FormText>
                                Phone Number
                              </FormText>
                              <Input 
                                className='styled-input' 
                                aria-label='phoneNumber' 
                                type='text'
                                value='086457364982' />
                            </Col>
                            <Col md={6} className='my-2'>
                              <FormText>
                                City
                              </FormText>
                              <Input 
                                className='styled-input' 
                                aria-label='city' 
                                type='text'
                                value='Medan' />
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
                                value='Medan, Indonesia' />
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
                                value='55555' />
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
}
