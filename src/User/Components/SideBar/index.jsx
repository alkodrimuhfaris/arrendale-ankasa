import React, { Component } from "react";
import "./styled/style.css";
import { FaCog, FaSignOutAlt, FaStar, FaUserCircle } from "react-icons/fa";

// import images
import avatar from "../../Assets/profile.jpg";
import { Col, Input, Row } from "reactstrap";

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <div className='d-flex flex-column my-2'>
          <div className='d-flex flex-column align-items-center'>
            <div className='outline rounded-circle d-flex align-items-center justify-content-center'>
              <div>
                <img className='rounded-circle' src={avatar} alt='avatar' />
              </div>
            </div>
            <div className='my-3'>
              <label>
                <span className="btn btn-white rounded-lg font-weight-bold py-2">Select Photo</span>
                <Input style={{ display: "none" }} type="file" accept=".jpg,.png" />
              </label>
            </div>
            <div className='font-weight-bold h5'>
                Mike Kowalski
            </div>
            <div className='text-muted small'>
                Medan, Indonesia
            </div>
          </div>
          <Row className='w-100 mt-3 no-gutters'>
            <Col className='small font-weight-bold'>Cards</Col>
            <Col className='small text-right font-weight-bold' style={{color: "#2395FF"}}>+ Add</Col>
          </Row>
          <div className='cards w-100 px-4 py-3 mt-2'>
            <div className='font-weight-bold'>4441 1235 5512 5551</div>
            <Row>
              <Col className='small'>X Card</Col>
              <Col className='small text-right'>$ 1,440.2</Col>
            </Row>
          </div>
          <Row className='mt-4 d-flex align-items-center justify-content-center'>
            <Col md={4} className='my-3 text-right'>
              <FaUserCircle />
            </Col>
            <Col md={7} className='my-3 font-weight-bold'>
              Profile
            </Col>
            <Col md={4} className='my-3 text-right'>
              <FaStar />
            </Col>
            <Col md={7} className='my-3 font-weight-bold'>
              My Review
            </Col>
            <Col md={4} className='my-3 text-right'>
              <FaCog />
            </Col>
            <Col md={7} className='my-3 font-weight-bold'>
              Settings
            </Col>
            <Col md={4} className='my-3 text-danger text-right'>
              <FaSignOutAlt />
            </Col>
            <Col md={7} className='my-3 text-danger font-weight-bold'>
              Logout
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
