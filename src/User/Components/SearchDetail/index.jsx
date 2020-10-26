/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Heading6, Heading4, LinkChange, SwitchButton } from "./styled";

import mediumFlight from "../../Assets/medium-flight.svg";
import horizontalSwitch from "../../Assets/horizontal-switch.svg";

import searchActions from "../../Redux/actions/search";

const SearchDetail = (props) => {
  const [isSwitch, setIsSwitch] = useState(false);
  const filterSearch = useSelector(state => state.findTicket.filterData);
  const dispatch = useDispatch();

  const onSwitchPlace = () => setIsSwitch(!isSwitch);
  const onClickSearch = () => {
    const originId = localStorage.getItem("originCityId");
    const destinationId = localStorage.getItem("destinationCityId");
    if (!isSwitch) {
      dispatch(searchActions.findTicket(originId, destinationId, filterSearch));
    } else {
      dispatch(searchActions.findTicket(destinationId, originId, filterSearch));
    }
  };
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
                {!isSwitch && localStorage.getItem("originCityName")}
                {isSwitch && localStorage.getItem("destinationCityName")}
                ({!isSwitch && localStorage.getItem("originCountryCode")}
                {isSwitch && localStorage.getItem("destinationCountryCode")})
              </Heading4>
            </Col>
            <Col lg="auto">
              <SwitchButton onClick={onSwitchPlace}>
                <img src={horizontalSwitch} alt="" />
              </SwitchButton>
            </Col>
            <Col lg="auto">
              <Heading4>
                {isSwitch && localStorage.getItem("originCityName")}
                {!isSwitch && localStorage.getItem("destinationCityName")}(
                {isSwitch && localStorage.getItem("originCountryCode")}
                {!isSwitch && localStorage.getItem("destinationCountryCode")})
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
          <LinkChange to="/search/result" onClick={onClickSearch}>
            Change Search
          </LinkChange>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchDetail;
