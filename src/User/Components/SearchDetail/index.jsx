/* eslint-disable react/prop-types */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Heading6, Heading4, LinkChange } from "./styled";

import mediumFlight from "../../Assets/medium-flight.svg";
import horizontalSwitch from "../../Assets/horizontal-switch.svg";

const SearchDetail = (props) => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="align-items-center">
        <Col lg="auto">
          <img src={mediumFlight} alt="" />
        </Col>
        <Col lg="auto">
          <Row className="justify-content-between">
            <Col>
              <Heading6>From</Heading6>
            </Col>
            <Col>
              <Heading6></Heading6>
            </Col>
            <Col>
              <Heading6 className="text-right">To</Heading6>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col lg="auto">
              <Heading4>
                {props.fromCity} ({props.fromCountry})
              </Heading4>
            </Col>
            <Col lg="auto">
              <img src={horizontalSwitch} alt="" />
            </Col>
            <Col lg="auto">
              <Heading4>
                {props.toCity} ({props.toCountry})
              </Heading4>
            </Col>
          </Row>
          <Row>
            <Col lg="auto">
              <Heading6>{props.departure}</Heading6>
            </Col>
            <Col lg="auto">
              <Heading6>
                <li>{props.passenger} Passanger</li>
              </Heading6>
            </Col>
            <Col lg="auto">
              <Heading6>
                <li>{props.class}</li>
              </Heading6>
            </Col>
          </Row>
        </Col>
        <Col className="text-right">
          <LinkChange to="/">Change Search</LinkChange>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchDetail;
