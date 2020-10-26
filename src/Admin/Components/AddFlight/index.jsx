/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container, Card, CardBody,
  Col, Form, FormGroup, Label, Input
} from "reactstrap";

import "./styled/style.css";

// import component
import ModalResponse from "../../Components/ModalResponse";

//import action dispatch
import flightAction from "../../Redux/actions/manageFlight";
import airlineAction from "../../Redux/actions/manageAirline";
import cityAction from "../../Redux/actions/manageCity";
import transitAction from "../../Redux/actions/manageTransit";

const AddFlight = (props) => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [closeModal] = useState(false);
  const [imessage, setImessage] = useState("");

  const [airline_id, setAirlineId] = useState();
  const [origin, setOrigin] = useState(0);
  const [destination, setDestination] = useState("");
  const [departure_date, setDepartureDate] = useState("");
  const [departure_time, setDepartureTime] = useState("");
  const [arrived_date, setArrivedDate] = useState("");
  const [arrived_time, setArrivedTime] = useState("");
  
  useEffect(()=>{
    dispatch(airlineAction.readAirline());
    dispatch(cityAction.readCity());
    dispatch(transitAction.readTransit());
  }, [dispatch]);
  
  const token = useSelector(state=>state.auth.token);
  const airlineData = useSelector(state=>state.manageAirline);
  const flightData = useSelector(state=>state.manageFlight);
  const cityData = useSelector(state=>state.manageCity.data);
  const {data} = airlineData;
  const {message, isAdd, isError} = flightData;


  useEffect(()=>{
    if (airline_id) {
      setAirlineId(airline_id.slice(0, airline_id.indexOf(".")));
    }
    if (departure_time) {
      alert(departure_time);
    }
  },[airline_id, departure_time]);

  const AddFlight = (e) => {
    e.preventDefault();
    const data = {
      airlines_id: Number(airline_id),
      flight_code: "AB-221",
      origin,
      destination,
      departure_date,
      departure_time,
      arrived_date,
      arrived_time
    };
    console.log(data);
    dispatch(flightAction.addingFlight(token, data));
  };

  useEffect(() => {
    if (isAdd) {
      setImessage(message);
      setModalOpen(true);
      dispatch(flightAction.clearMessage());
    }
    if (isError) {
      setImessage(message);
      setModalOpen(true);
      dispatch(flightAction.clearMessage());
    }
  },[isError, isAdd]);

  return (
    <>
      <div className="body">
        {/* <Container> */}
        <Card className="cardFlightS">
          <CardBody className="cardFlight">
            <Label className="h3 mb-4 font-weight-bold">Add Flight</Label>
            <Form onSubmit={AddFlight}>
              <FormGroup row>
                <Label for="input-id" md={2} sm={3}>Airline</Label>
                <Col>
                  <Input type="select" onChange={(e)=>{setAirlineId(e.target.value);}} aria-label='name' required>
                    <option>--Select Airlines--</option>);
                    {Object.keys(data) && data.length && data.map((items, index)=>{
                      return (           
                        <option>{items.id}. {items.name}</option>
                      );})}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-origin" md={2} sm={3}>Origin</Label>
                <Col>
                  <Input type="select" onChange={(e)=>{setOrigin(e.target.value);}} aria-label='name' required>
                    <option>--Select Origin--</option>);
                    {Object.keys(cityData) && cityData.length && cityData.map((items, index)=>{
                      return (           
                        <option>{items.city_name}</option>
                      );})}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-desti" md={2} sm={3}>Destination</Label>
                <Col>
                  <Input type="select" onChange={(e)=>{setDestination(e.target.value);}} aria-label='name'>
                    <option>--Select Destination--</option>);
                    {Object.keys(cityData) && cityData.length && cityData.map((items, index)=>{
                      return (           
                        <option>{items.city_name}</option>
                      );})}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-depart-date" md={2} sm={3}>Departure date</Label>
                <Col>
                  <Input className="input-data" type="date" name="departure_date" id="input-depart-date" onChange={(e)=>{setDepartureDate(e.target.value);}} required></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-depart-time" md={2} sm={3}>Departure time</Label>
                <Col>
                  <Input className="input-data" type="time" name="departure_time" id="input-depart-time" onChange={(e)=>{setDepartureTime(e.target.value+":00");}} required></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-arrived-date" md={2} sm={3}>Arrived date</Label>
                <Col>
                  <Input className="input-data" type="date" name="arrived_date" id="input-arrived-date" onChange={(e)=>{setArrivedDate(e.target.value);}} required></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-arrived" md={2} sm={3}>Arrived time</Label>
                <Col>
                  <Input className="input-data" type="time" name="arrived_time" id="input-arrived" onChange={(e)=>{setArrivedTime(e.target.value+":00");}} required></Input>
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