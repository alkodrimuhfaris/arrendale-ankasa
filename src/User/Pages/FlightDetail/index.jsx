/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Components
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import CardFlightDetail from "../../Components/CardFlightDetail";
import FormContactPerson from "../../Components/FormContactPerson";
import FormPassengerDetail from "../../Components/FormPassengerDetail";
import FormInsurance from "../../Components/FormPassengerDetail/FormInsurance";

//Styled
import {
  GlobalStyle,
  FlightBackground,
  Heading1,
  Heading4,
  PaymentButton,
} from "./styled";

//Images
import bigFlight from "../../Assets/big-flight.png";

//API
import FlightDetailApi from "../../API/FlightDetail";

export class FlightDetail extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <NavBar />
        <FlightBackground>
          <img src={bigFlight} alt="" />
        </FlightBackground>
        <Container className="mt-5">
          <Row className="align-items-center">
            <Col lg={8}>
              <Heading1 inputColor="#FFFFFF">Contact Person Details</Heading1>
            </Col>
            <Col lg={2}>
              <Heading1 inputColor="#FFFFFF">Flight Details</Heading1>
            </Col>
            <Col lg={2}>
              <Heading4>View Details</Heading4>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={8}>
              <FormContactPerson />
              <div className="mb-2 mt-5">
                <Heading1 inputColor="#000000">Passenger Details</Heading1>
              </div>
              <FormPassengerDetail />
              <div className="mb-2 mt-5">
                <Heading1 inputColor="#000000">Passenger Details</Heading1>
              </div>
              <FormInsurance />
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
          <Row className="justify-content-center m-5">
            <Col lg={8}>
              <PaymentButton>Proceed to Payment</PaymentButton>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default FlightDetail;
