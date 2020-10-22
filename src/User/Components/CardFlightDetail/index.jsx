/* eslint-disable react/prop-types */
import React from "react";
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
  return (
    <Card>
      <Container className="mb-3">
        <Row className="align-items-center">
          <Col lg="auto">
            <AirlineLogo src={props.airlineLogo} alt="" />
          </Col>
          <Col lg="auto">
            <AirlineName>{props.airlineName}</AirlineName>
          </Col>
        </Row>
      </Container>
      <Container className="mb-3">
        <Row>
          <Col lg="auto">
            <Heading1>{props.fromDestination}</Heading1>
          </Col>
          <Col lg="auto">
            <img src={flightIcon} alt="" />
          </Col>
          <Col lg="auto">
            <Heading1>{props.toDestination}</Heading1>
          </Col>
        </Row>
        <Row>
          <Col lg="auto">
            <Heading6>{props.departure}</Heading6>
          </Col>
          <Col lg="auto">
            <Heading6>
              <li></li>
            </Heading6>
          </Col>
          <Col className="m-0 p-0">
            <Heading6>
              {props.departureTime} - {props.arrivedTime}
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
            <TotalPrice>{props.totalPayment}</TotalPrice>
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
