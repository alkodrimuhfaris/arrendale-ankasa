/* eslint-disable react/prop-types */
import React from "react";
import {Container, Row, Col} from "reactstrap";
import {Heading1, TextSecondary, Heading4, AirlineLogo, Card} from "./styled";

import flightIcon from "../../Assets/flight.svg";

const BookingPass = (props) => {
  return (
    <Card>
      <Container>
        <Row className="align-items-center">
          <Col>
            <AirlineLogo src={props.airlineLogo} alt="" />
          </Col>
          <Col>
            <Heading1>{props.from}</Heading1>
          </Col>
          <Col>
            <img src={flightIcon} alt="" />
          </Col>
          <Col>
            <Heading1>{props.to}</Heading1>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col sm={5} >
            <TextSecondary>Code</TextSecondary>
          </Col>
          <Col sm={5} >
            <TextSecondary>Class</TextSecondary>
          </Col>
          <div className="w-100"></div>
          <Col sm={5} >
            <Heading4>{props.code}</Heading4>
          </Col>
          <Col sm={5} >
            <Heading4>{props.class}</Heading4>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <TextSecondary>Terminal</TextSecondary>
          </Col>
          <Col sm={5}>
            <TextSecondary>Gate</TextSecondary>
          </Col>
          <div className="w-100"></div>
          <Col sm={5}>
            <Heading4>{props.terminal}</Heading4>
          </Col>
          <Col sm={5}>
            <Heading4>{props.gate}</Heading4>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <TextSecondary>Departure</TextSecondary>
          </Col>
          <Col sm={12}>
            <Heading4>{props.departure}</Heading4>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default BookingPass;
