/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Components
import CardFlightDetail from "../../Components/CardFlightDetail";
import FormContactPerson from "../../Components/FormContactPerson";

//Styled
import { GlobalStyle, FlightBackground, Heading1, Heading4 } from "./styled";

//Images
import bigFlight from "../../Assets/big-flight.png";

//API
import FlightDetailApi from "../../API/FlightDetail";

export class FlightDetail extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <FlightBackground>
          <img src={bigFlight} alt="" />
        </FlightBackground>
        <Container className="mt-5">
          <Row className="align-items-center">
            <Col lg={8}>
              <Heading1>Contact Person Details</Heading1>
            </Col>
            <Col lg={2}>
              <Heading1>Flight Details</Heading1>
            </Col>
            <Col lg={2}>
              <Heading4>View Details</Heading4>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <FormContactPerson />
            </Col>
            <Col lg={4}>
              {FlightDetailApi.data.map((item) => (
                <CardFlightDetail
                  airlineLogo={item.logoAirline}
                  airlineName={item.airline}
                  fromDestination={item.from}
                  toDestination={item.to}
                  departure={item.departure}
                  departureTime={item.departureTime}
                  arrivedTime={item.arrivedTime}
                  refundable={item.refundable}
                  reschedule={item.reschedule}
                  totalPayment={item.totalPrice}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default FlightDetail;
