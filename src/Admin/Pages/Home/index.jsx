/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, ListGroup, ListGroupItem, Badge, Row, Col} from "reactstrap";

import Navbar from "../../Components/NavBar";
import Footer from "../../../User/Components/Footer";
import ManageUser from "../../Components/ManageUser";
import Profile from "../../Components/Profile";
import AddFlight from "../../Components/AddFlight";
import AddAirline from "../../Components/AddAirline";
import AddFlightDetail from "../../Components/AddFlightDetail";
import HistoryTransaction from "../../Components/HistoryTransaction";

import manageUserAction from "../../Redux/actions/manageUser";
import manageAirlineAction from "../../Redux/actions/manageAirline";
import manageFlightAction from "../../Redux/actions/manageFlight";
import manageTransactionAction from "../../Redux/actions/manageTransaction";

import Loading from "../../Assets/loading.gif";


const Home = (props) => {
  let history = useHistory();
  let dispatch = useDispatch();

  const managedata = useSelector(state=>state.manageUser);
  const flightData = useSelector(state=>state.manageFlight.data);
  const airlineData = useSelector(state=>state.manageAirline.data);
  const transactionData = useSelector(state=>state.manageTransaction.info);
  const token = useSelector(state=>state.auth.token);

  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);


  useEffect(()=>{
    dispatch(manageUserAction.readUser(token, ["username", "ASC"]));
    dispatch(manageFlightAction.readFlight());
    dispatch(manageAirlineAction.readAirline());
    dispatch(manageTransactionAction.readTransaction(token));
  }, [dispatch, token]);

  const {dataUser} = managedata;
  
  const toggleHandler1 = () => {
    history.push("/admin/home");
    setToggle1(true);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setToggle6(false);
  };
  const toggleHandler2 = () => {
    history.push("/admin/home");
    setToggle1(false);
    setToggle2(true);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setToggle6(false);
  };
  const toggleHandler3 = () => {
    history.push("/admin/home");
    setToggle1(false);
    setToggle2(false);
    setToggle3(true);
    setToggle4(false);
    setToggle5(false);
    setToggle6(false);
  };
  const toggleHandler4 = () => {
    history.push("/admin/home");    
    setToggle1(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(true);
    setToggle5(false);
    setToggle6(false);
  };
  const toggleHandler5 = () => {
    history.push("/admin/home");    
    setToggle1(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(true);
    setToggle6(false);
  };
  const toggleHandler6 = () => {
    history.push("/admin/home");    
    setToggle1(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setToggle6(true);
  };
  return (
    <React.Fragment>
      {Object.keys(dataUser) && dataUser.length ? <>
        <Navbar />
        <Container className="mt-2">
          <Row>
            <Col md={3} xs={3}>
              <ListGroup>
                <ListGroupItem className={toggle1 ? "active" : "block"} onClick={toggleHandler1} tag="button" action>Profile</ListGroupItem>
                <ListGroupItem className={toggle2 ? "active" : "block"} onClick={toggleHandler2} tag="button" action>Manage User <Badge pill>{dataUser.length}</Badge></ListGroupItem>
                <ListGroupItem className={toggle3 ? "active" : "block"} onClick={toggleHandler3} tag="button" action>Manage Airline <Badge pill>{airlineData.length}</Badge></ListGroupItem>
                <ListGroupItem className={toggle4 ? "active" : "block"} onClick={toggleHandler4} tag="button" action>Manage Flight <Badge pill>{flightData.length}</Badge></ListGroupItem>
                <ListGroupItem className={toggle5 ? "active" : "block"} onClick={toggleHandler5} tag="button" action style={{wordWrap: "break-word"}}>Manage Flight detail</ListGroupItem>
                <ListGroupItem className={toggle6 ? "active" : "block"} onClick={toggleHandler6} tag="button" action style={{wordWrap: "break-word"}}>Transactions History <Badge pill> {transactionData.length}</Badge></ListGroupItem>
              </ListGroup>
            </Col>
            {toggle1 && <Col md={9} xs={9}>
              <Profile />
            </Col>}
            {toggle2 && <Col md={9} xs={9}>
              <ManageUser />
            </Col>}
            {toggle3 && <Col md={9} xs={9}>
              <AddAirline /> 
            </Col>}
            {toggle4 && <Col md={9} xs={9}>
              <AddFlight /> 
            </Col>}
            {toggle5 && <Col md={9} xs={9}>
              <AddFlightDetail /> 
            </Col>}
            {toggle6 && <Col md={9} xs={9}>
              <HistoryTransaction /> 
            </Col>}
          </Row>
        </Container>
        <Footer /></> : <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", objectFit: "fill"}}><img src={Loading} /></div>}
    </React.Fragment>
  );
};

export default Home;