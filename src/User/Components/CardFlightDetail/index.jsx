/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  AirlineLogo,
  AirlineName,
  Heading1,
  Heading6,
  TextInfo,
  TotalPrice,
} from "./styled";

import flightIcon from "../../Assets/flight.svg";
import checkEclipse from "../../Assets/Circle-Checklist.svg";
import uncheckEclipse from "../../Assets/Circle-unChecklist.svg";
import downIcon from "../../Assets/down.svg";

const CardFlightDeatil = (props) => {
  const [originCityName, setOriginCityName] = useState("");
  const [originCountryCode, setOriginCountryCode] = useState("");
  const [destinationCityName, setDestinationCityName] = useState("");
  const [destinationCountryCode, setDestinationCountryCode] = useState("");
  const ticket = useSelector((state) => state.selectTicket);
  const city = useSelector((state) => state.getAllCity);

  useEffect(() => {
    city.data.map(item => {
      if(item.id === ticket.data[0].origin){
        setOriginCountryCode(item.country_code);
        setOriginCityName(item.city_name);
      }
      if(item.id === ticket.data[0].destination){
        setDestinationCountryCode(item.country_code);
        setDestinationCityName(item.city_name);
      }
    });
  }, []);

  // eslint-disable-next-line no-undef
  const { REACT_APP_BACKEND_URL } = process.env;
  return (
    <Card>
      <Container className="mb-3">
        <Row className="align-items-center">
          <Col lg="auto">
            <AirlineLogo
              src={REACT_APP_BACKEND_URL + ticket.data[0].airlines_logo}
              alt=""
            />
          </Col>
          <Col lg="auto">
            <AirlineName>{ticket.data[0].name}</AirlineName>
          </Col>
        </Row>
      </Container>
      <Container className="mb-3">
        <Row>
          <Col lg="auto">
            <Heading1>
              {originCityName}({originCountryCode})
            </Heading1>
          </Col>
          <Col lg="auto">
            <img src={flightIcon} alt="" />
          </Col>
          <Col lg="auto">
            <Heading1>
              {destinationCityName}
              ({destinationCountryCode})
            </Heading1>
          </Col>
        </Row>
        <Row>
          <Col lg="auto">
            <Heading6>{ticket.data[0].departure_date}</Heading6>
          </Col>
          <Col lg="auto">
            <Heading6>
              <li></li>
            </Heading6>
          </Col>
          <Col className="m-0 p-0">
            <Heading6>
              {ticket.data[0].departure_time} - {ticket.data[0].arrived_time}
            </Heading6>
          </Col>
        </Row>
      </Container>
      <Container className="mb-3">
        <Row>
          <Col lg="auto">
            <img
              src={props.refundable ? checkEclipse : uncheckEclipse}
              alt=""
            />
          </Col>
          <Col lg="auto" className="m-0 p-0">
            <TextInfo>Refundable</TextInfo>
          </Col>
        </Row>
        <Row>
          <Col lg="auto">
            <img
              src={props.reschedule ? checkEclipse : uncheckEclipse}
              alt=""
            />
          </Col>
          <Col lg="auto" className="m-0 p-0">
            <TextInfo>Can reschedule</TextInfo>
          </Col>
        </Row>
      </Container>
      <Container className="border-top text-center">
        <Row className="align-items-center mt-3">
          <Col lg="auto">
            <Heading1>Total Payment</Heading1>
          </Col>
          <Col lg="auto" className="ml-auto p-0">
            <TotalPrice>{ticket.data[0].price}</TotalPrice>
          </Col>
          <Col lg="auto">
            <img src={downIcon} alt="" />
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CardFlightDeatil;
