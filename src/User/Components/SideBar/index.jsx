/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./styled/style.css";
import { FaCog, FaSignOutAlt, FaStar, FaUserCircle } from "react-icons/fa";
import { Button, Col, Input, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import { connect } from "react-redux";

// import images
import avatar from "../../Assets/profile.jpg";

import authAction from '../../Redux/actions/auth'

const { REACT_APP_BACKEND_URL } = process.env;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalLogout: false,
    };
  }

  logout = () => {
    this.props.logout()
  }

  render() {
    return (
      <>
        <div className='d-flex flex-column my-2'>
          <div className='d-flex flex-column align-items-center'>
            <div className='outline rounded-circle d-flex align-items-center justify-content-center'>
              <div>
                <img className='rounded-circle' 
                  src={this.props.picture!==undefined?
                    REACT_APP_BACKEND_URL.concat(this.props.picture):
                    avatar} 
                  alt='avatar'
                  width='110.9px'
                  height='110.9px' />
              </div>
            </div>
            <div className='my-3'>
              <label>
                <span className="btn btn-white rounded-lg font-weight-bold py-2">Select Photo</span>
                <Input style={{ display: "none" }} type="file" accept=".jpg,.png" />
              </label>
            </div>
            <div className='font-weight-bold h5'>
              {this.props.name}
            </div>
            <div className='text-muted small'>
              {this.props.address}
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
            <Col md={12}>
              <Button block onClick={()=>this.setState({modalLogout: true})} className='logout ml-2'>
                <Row width={100}>
                  <Col md={4} className='my-3 text-danger text-right'>
                    <FaSignOutAlt />
                  </Col>
                  <Col md={7} className='my-3 text-danger text-left font-weight-bold'>
                    Logout
                  </Col>
                </Row>
              </Button>
            </Col>
          </Row>
        </div>
        <Modal isOpen={this.state.modalLogout} centered>
          <ModalBody className='text-center'>
            Are you sure to logout?
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.logout} color='danger'>Yes</Button>
            <Button onClick={()=>this.setState({modalLogout: false})} color='primary'>No</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  logout: authAction.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
