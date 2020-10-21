import React, { Component } from "react";
import {
  Col, Container, Row
} from "reactstrap";
import {
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube,
  FaRegCopyright, FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../../Assets/logo.svg";
import apple from "../../Assets/apple.png";
import android from "../../Assets/android.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="w-100 h-100 bg-white py-5 mt-5">
        <Container>
          <Row>
            <Col md={4} className='pr-5'>
              <div>
                <img src={logo} alt='logo ankasa' />
              </div>
              <div className='mt-4 text-muted small'>
                Find your Flight and explore the world with us. We will take care of the rest
              </div>
            </Col>
            <Col md={2}>
              <div className='h6 font-weight-bold'>
                Features
              </div>
              <div className='my-3 text-muted small'>
                Find Ticket
              </div>
              <div className='my-3 text-muted small'>
                My Booking
              </div>
              <div className='my-3 text-muted small'>
                Chat
              </div>
              <div className='my-3 text-muted small'>
                Notification
              </div>
            </Col>
            <Col md={3}>
              <div className='h6 font-weight-bold'>
                Download Ankasa app
              </div>
              <div className='my-3'>
                <img src={apple} alt='app store' />
              </div>
              <div className='my-3'>
                <img src={android} alt='playstore' />
              </div>
            </Col>
            <Col md={2}>
              <div className='h6 font-weight-bold'>
                Follow Us
              </div>
              <div className='my-3 d-flex align-items-center justify-content-between'>
                <div>
                  <FaFacebookF />
                </div>
                <div>
                  <FaTwitter />
                </div>
                <div>
                  <FaInstagram />
                </div>
                <div>
                  <FaYoutube />
                </div>
              </div>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col className='d-flex align-items-center'>
              <FaRegCopyright />
              <div className='ml-2 h6 m-0 text-muted'>Ankasa.  All Rights Reserved.</div>
            </Col>
            <Col className='d-flex align-items-center justify-content-end'>
              <FaMapMarkerAlt />
              <div className='ml-2 h6 m-0 text-muted'>Jakarta Indonesia</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
