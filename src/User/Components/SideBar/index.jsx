/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styled/style.css";
import { FaChevronRight, FaCog, FaSignOutAlt, FaStar, FaTimes, FaUserCircle } from "react-icons/fa";
import { Button, Col, Input, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import Currency from "react-currency-format";

// import images
import placeholder from "../../Assets/profile.jpg";

import authAction from "../../Redux/actions/auth";
import profileAction from "../../Redux/actions/profile";

const { REACT_APP_BACKEND_URL } = process.env;

export default function SideBar(props) {
  const [modalLogout, setLogout] = useState(false);
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [balance, setBalance] = useState("");
  const [alertOpen, setAlert] = useState(false);
  const { token } = useSelector((state)=>state.auth);
  const { data, alertMsg } = useSelector((state)=>state.profile);
  const form = new FormData();
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(profileAction.getProfile(token));
  };

  useEffect(() => {
    if(data.length){
      setAvatar(data[0].avatar);
      setUsername(data[0].username);
      setAddress(data[0].address);
      setBalance(data[0].balance);
    }
    if(alertMsg!==""){
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [data, alertMsg]);

  const uploadPict = (e) => {
    form.append("picture", e.target.files[0]);
    dispatch(profileAction.editPict(token, form));
  };

  const closeModal = () => {
    setAlert(false);
    getData();
  };

  const relogin = () => {
    dispatch(authAction.relogin());
  };

  const logout = () => {
    dispatch(authAction.logout());
    dispatch(profileAction.clearState());
  };

  return (
    <>
      <div className='d-flex flex-column my-2'>
        <div className='d-flex flex-column align-items-center'>
          <div className='outline rounded-circle d-flex align-items-center justify-content-center overflow-hidden'>
            <div>
              <img
                src={avatar!==null?
                  REACT_APP_BACKEND_URL.concat(avatar):
                  placeholder} 
                alt='avatar'
                width='100%' />
            </div>
          </div>
          <div className='my-3'>
            <label>
              <span className="btn btn-white rounded-lg font-weight-bold py-2">Select Photo</span>
              <Input onChange={uploadPict} style={{ display: "none" }} type="file" accept=".jpg,.png" />
            </label>
          </div>
          <div className='font-weight-bold h5'>
            {username}
          </div>
          <div className='text-muted small'>
            {address}
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
            <Col className='small text-right'>
              {balance!==null
                ?<Currency value={balance} displayType={"text"} thousandSeparator={true} prefix={"$ "} />
                :<div>$ 0</div>}
            </Col>
          </Row>
        </div>
        <div className='w-100 mt-4 pl-2 d-flex align-items-center justify-content-center'>
          <Row>
            <Col md={2} className='my-3 text-right' 
              style={{color: props.from==="profile"?"#2395FF":"black"}}>
              <FaUserCircle />
            </Col>
            <Col md={8} className='my-3 font-weight-bold' 
              style={{color: props.from==="profile"?"#2395FF":"black"}}>
              <Link to='/profile' className='side-link'>
                  Profile
              </Link>
            </Col>
            <Col md={2} className='my-3 text-right' 
              style={{color: props.from==="profile"?"#2395FF":"black"}}>
              <FaChevronRight />
            </Col>
            <Col md={2} className='my-3 text-right' 
              style={{color: props.from==="review"?"#2395FF":"black"}}>
              <FaStar />
            </Col>
            <Col md={8} className='my-3 font-weight-bold' 
              style={{color: props.from==="review"?"#2395FF":"black"}}>
                My Review
            </Col>
            <Col md={2} className='my-3 text-right' 
              style={{color: props.from==="review"?"#2395FF":"black"}}>
              <FaChevronRight />
            </Col>
            <Col md={2} className='my-3' 
              style={{color: props.from==="settings"?"#2395FF":"black"}}>
              <FaCog />
            </Col>
            <Col md={8} className='my-3 font-weight-bold' 
              style={{color: props.from==="settings"?"#2395FF":"black"}}>
                Settings
            </Col>
            <Col md={2} className='my-3 text-right' 
              style={{color: props.from==="settings"?"#2395FF":"black"}}>
              <FaChevronRight />
            </Col>
            <Col md={12} className='p-0'>
              <Button onClick={()=>setLogout(true)} className='w-100 p-0 logout'>
                <Row className='w-100 m-0'>
                  <Col md={2} className='my-3 text-danger text-right'>
                    <FaSignOutAlt />
                  </Col>
                  <Col md={8} className='my-3 text-danger text-left font-weight-bold'>
                      Logout
                  </Col>
                  <Col md={2} className='my-3 text-danger text-right'>
                    <FaChevronRight />
                  </Col>
                </Row>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <Modal isOpen={modalLogout} centered>
        <ModalBody className='text-center'>
            Are you sure to logout?
        </ModalBody>
        <ModalFooter>
          <Button onClick={logout} color='danger'>Yes</Button>
          <Button onClick={()=>setLogout(false)} color='primary'>No</Button>
        </ModalFooter>
      </Modal>
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
