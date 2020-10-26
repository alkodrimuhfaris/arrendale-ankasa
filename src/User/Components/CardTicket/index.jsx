/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Card,
  Logo,
  Airline,
  TextDestination,
  AirlineIcon,
  Period,
  Text,
  Price,
  SelectButton,
  TextButton,
  ViewDetails,
  Icon,
} from "./styled";
import { Row, Col, Container } from "reactstrap";

import flightIcon from "../../Assets/flight.svg";
import luggage from "../../Assets/luggage.svg";
import meal from "../../Assets/meal.svg";
import wifi from "../../Assets/wifi.svg";
import downIcon from "../../Assets/down.svg";

import searchActions from "../../Redux/actions/search";

const CardTicket = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickSearch = async (id) => {
    await dispatch(searchActions.selectTicket(id));
    history.push("/flight/detail");
  };
  return (
    <Card className="mt-3">
      <Container>
        <Row className="align-items-center">
          <Col sm={2}>
            <Logo src={props.logoAirlines} alt="" />
          </Col>
          <Col sm={10}>
            <Airline>{props.nameAirlines}</Airline>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-between mt-4">
          <Col sm={3}>
            <Row>
              <Col sm={4}>
                <Row>
                  <Col>
                    <TextDestination>{props.departure}</TextDestination>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text>{props.departureTime}</Text>
                  </Col>
                </Row>
              </Col>
              <Col sm={3}>
                <AirlineIcon src={flightIcon} alt="" />
              </Col>
              <Col sm={4}>
                <Row>
                  <Col>
                    <TextDestination>{props.arrived}</TextDestination>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text>{props.arrivedTime}</Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm={3}>
            <Row className="justify-content-center">
              <Col>
                <Period>{props.period}</Period>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>
                  ({props.transit !== 1 ? props.transit : null}&nbsp;
                  {props.transit !== 1 ? "Transit" : "Direct"})
                </Text>
              </Col>
            </Row>
          </Col>
          <Col sm="auto" className="m-0 p-0">
            <Row>
              <Col>
                <Icon
                  src={props.facilities[0].length ? luggage : ""}
                  className="m-1"
                />
                <Icon
                  src={props.facilities[1].length ? meal : ""}
                  className="m-1"
                />
                <Icon
                  src={props.facilities[2].length ? wifi : ""}
                  className="m-1"
                />
              </Col>
            </Row>
          </Col>
          <Col sm="auto">
            <Row>
              <Col className="align-self-center">
                <Price>
                  {props.price}
                  <Text>/pax</Text>
                </Price>
              </Col>
            </Row>
          </Col>
          <Col sm="auto">
            <SelectButton type="button" onClick={() => onClickSearch(props.ticketId)}>
              <TextButton>Select</TextButton>
            </SelectButton>
          </Col>
        </Row>
        <Row>
          <Col sm="auto">
            <ViewDetails to={props.viewDetails} onClick={props.onClick}>
              View Details
              <Icon src={downIcon} alt="" className="ml-2" />
            </ViewDetails>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};


export default CardTicket;

