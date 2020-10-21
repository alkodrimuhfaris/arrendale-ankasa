import React, { useState } from "react";
import "./styled/style.css"
import { Collapse, Button, Label, Input, Row } from "reactstrap";

import upIcon from "../../Assets/up.svg";

const CheckList = () => {
  const [transit, setTransit] = useState(false);
  const toggleTransit = () => setTransit(!transit);
  const [facilities, setFacilities] = useState(false);
  const toggleFacilities = () => setFacilities(!facilities)
  const [depart, setDepart] = useState(false);
  const toggleDepart = () => setDepart(!depart)
  const [arrived, setArrived] = useState(false);
  const toggleArrived = () => setArrived(!arrived);
  const [airlines, setAirlines] = useState(false);
  const toggleAirlines = () => setAirlines(!airlines);
  const [ticketPrice, setTicketPrice] = useState(false);
  const toggleTicketPrice = () => setTicketPrice(!ticketPrice);

  return (
    <div className="mt-3 bg-white rounded-lg">
        <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleTransit}>
          <div>
            <span>Transit</span>
          </div>
          <img className="arrow" src={upIcon} alt="arrow"/>
        </Button>
        <Collapse isOpen={transit} className="bg-white p-3">
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="direct">Direct</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="direct"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="transit">Transit</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="transit"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center">
            <div className="pl-3">
              <Label for="transit2+">Transit 2+</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="transit2+"></Input>
            </div>
          </Row>
        </Collapse>

        <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleFacilities}>
          <div>
            <span>
              Facilities
            </span>
          </div>
          <img className="arrow" src={upIcon} alt="arrow"/>
        </Button>
        <Collapse isOpen={facilities} className="bg-white p-3">
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="luggage">Luggage</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="luggage"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="inFlightMeal">In-Flight Meal</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="inFlightMeal"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center">
            <div className="pl-3">
              <Label for="wifi">Wi-fi</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="wifi"></Input>
            </div>
          </Row>
        </Collapse>

        <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleDepart}>
          <div>
            <span>
              Departure Time
            </span>
          </div>
          <img className="arrow" src={upIcon} alt="arrow"/>
        </Button>
        <Collapse isOpen={depart} className="bg-white p-3">
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="0-6">00:00 - 00:06</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="0-6"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="6-12">06:00 - 12:00</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="6-12"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="12-18">12:00 - 18:00</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="12-18"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center">
            <div className="pl-3">
              <Label for="18-24">18:00 - 24:00</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="18-24"></Input>
            </div>
          </Row>
        </Collapse>

        <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleArrived}>
          <div>
            <span>
              Time Arrived
            </span>
          </div>
          <img className="arrow" src={upIcon} alt="arrow"/></Button>
        <Collapse isOpen={arrived} className="bg-white p-3">
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="0-6">00:00 - 00:06</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="0-6"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="6-12">06:00 - 12:00</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="6-12"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="12-18">12:00 - 18:00</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="12-18"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center">
            <div className="pl-3">
              <Label for="18-24">18:00 - 24:00</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="18-24"></Input>
            </div>
          </Row>
        </Collapse>

        <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleAirlines}>
          <div>
            <span>
              Airlines
            </span>
          </div>
          <img className="arrow" src={upIcon} alt="arrow"/></Button>
        <Collapse isOpen={airlines} className="bg-white p-3">
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="garuda">Garuda Indonesia</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="garuda"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center mb-3">
            <div className="pl-3">
              <Label for="airAsia">Air Asia</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="airAsia"></Input>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center">
            <div className="pl-3">
              <Label for="lionAir">Lion Air</Label>
            </div>
            <div className="pr-3">
              <Input className="position-relative" type="checkbox" id="lionAir"></Input>
            </div>
          </Row>
        </Collapse>

        <Button className="d-flex justify-content-between align-items-center bg-white w-100 text-dark text-left rounded-0 border-0 p-3 font-weight-bold" onClick={toggleTicketPrice}>
          <div>
            <span>
              Ticket Price
            </span>
          </div>
          <img className="arrow" src={upIcon} alt="arrow"/></Button>
        <Collapse isOpen={ticketPrice} className="bg-white p-3">
          <Row className="justify-content-between align-items-center mb-3">
            <div className="text-muted pl-3">
              <span>Lowest</span>
            </div>
            <div className="text-muted pr-3">
              <span>Highest</span>
            </div>
          </Row>
          <Row className="justify-content-between align-items-center mb-3">
            <Input className="mx-3" type="range" name="range" id="exampleRange" />
          </Row>
          <Row className="justify-content-between align-items-center">
            <div className="price-color pl-3 font-weight-bold">
              <span>$ 145,00</span>
            </div>
            <div className="price-color pr-3 font-weight-bold">
              <span>$ 300,00</span>
            </div>
          </Row>
        </Collapse>
    </div>
  );
};

export default CheckList;
