/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container, Card, CardBody,
  Col, Form, FormGroup, Label, Input,
  InputGroup, InputGroupAddon
} from "reactstrap";

import "./styled/style.css";

//import component
import ModalResponse from "../../Components/ModalResponse";

//import action dispatch
import flightAction from "../../Redux/actions/manageFlight";
import transitAction from "../../Redux/actions/manageTransit";

const AddFlight = (props) => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [closeModal] = useState(false);
  const [imessage, setImessage] = useState("");

  const [flight_id, setFlightId] = useState(0);
  const [transit_id, setTransitId] = useState("");
  const [class_name, setClassName] = useState("");
  const [price, setPrice] = useState(0);
  const [seat_count, setSeatCount] = useState(0);
  
  useEffect(()=>{
    dispatch(flightAction.readFlight());
    dispatch(transitAction.readTransit());
  }, [dispatch]);
  
  const token = useSelector(state=>state.auth.token);
  const flightData= useSelector(state=>state.manageFlight.data);
  const flights = useSelector(state=>state.manageFlight);
  const transitData = useSelector(state=>state.manageTransit.data);
  useEffect(()=>{
    if (transit_id) {
      setTransitId(transit_id.slice(0, 1));
    }
  },[transit_id]);
  
  const {messageDetail, isAddDetail, isErrorDetail} = flights;

  useEffect(() => {
    if (isAddDetail) {
      setImessage(messageDetail);
      setModalOpen(true);
      dispatch(flightAction.clearMessage());
    }
    if (isErrorDetail) {
      setImessage(messageDetail);
      setModalOpen(true);
      dispatch(flightAction.clearMessage());
    }
  },[isErrorDetail, isAddDetail]);

  const AddFlightDetail = (e) => {
    e.preventDefault();
    const data = {
      flight_id,
      transit_id: Number(transit_id),
      class_name,
      seat_count,
      price: Number(price)
    };
    console.log(data);
    dispatch(flightAction.addingFlightDetail(token, data));
  };

  return (
    <>
      <div className="body">
        {/* <Container> */}
        <Card className="cardFlightS">
          <CardBody className="cardFlight">
            <Label className="h3 mb-4 font-weight-bold">Add Flight Detail</Label>
            <Form onSubmit={AddFlightDetail}>
              <FormGroup row>
                <Label for="input-id" md={2} sm={3}>Flight Id</Label>
                <Col>
                  <Input type="select" onChange={(e)=>{setFlightId(e.target.value);}} aria-label='name' required>
                    <option>--Select Flight Id--</option>);
                    {Object.keys(flightData) && flightData.length && flightData.map((items, index)=>{
                      return (           
                        <option>{items.id}</option>
                      );})}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-origin" md={2} sm={3}>Transit</Label>
                <Col>
                  <Input type="select" onChange={(e)=>{setTransitId(e.target.value);}} aria-label='name' required>
                    <option>--Select Origin--</option>);
                    {Object.keys(transitData) && transitData.length && transitData.map((items, index)=>{
                      return (           
                        <option>{items.id}. {items.name}</option>
                      );})}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-desti" md={2} sm={3}>Class</Label>
                <Col>
                  <Input type="select" onChange={(e)=>{setClassName(e.target.value);}} aria-label='name' required>
                    <option>--Select Class--</option>);
                    <option>First Class</option>
                    <option>Business</option>
                    <option>Economy</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-depart-date" md={2} sm={3}>Seat</Label>
                <Col>
                  <Input className="input-data" type="number" name="seat_count" onChange={(e)=>{setSeatCount(e.target.value);}} placeholder="Total seat" required />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-depart-time" md={2} sm={3}>Price</Label>
                <Col>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input className="input-data" min={1} type="number" step="1" name="price" onChange={(e)=>{setPrice(e.target.value);}} placeholder="Ticket Price" required />
                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                  </InputGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={10}></Col>
                <Col md={2}>
                  <Input type="submit" value="Add" className="btn btn-primary" />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
      <ModalResponse open={modalOpen} close={()=>{setModalOpen(closeModal);}} message={imessage} />
    </>
  );
};

export default AddFlight;