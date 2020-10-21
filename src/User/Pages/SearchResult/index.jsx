/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Components
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import CardTicket from "../../Components/CardTicket";
import CheckList from "../../Components/CheckList";
import SearchDetail from "../../Components/SearchDetail";

//Styled
import {
  GlobalStyle,
  TextHeader1,
  TextHeader4,
  Reset,
  TextSecondary,
  BackgroundDetailSearch,
} from "./styled";

//Images
import bigFlight from "../../Assets/big-flight.png";
import verticalSwitch from "../../Assets/vertical-switch.svg";

//API
import SearchResultApi from "../../API/SearchResult/";

export class SearchResult extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <NavBar />
        <BackgroundDetailSearch>
          <img src={bigFlight} alt="" />
        </BackgroundDetailSearch>
        <SearchDetail
          fromCity={SearchResultApi.detailSearch[0].fromCity}
          fromCountry={SearchResultApi.detailSearch[0].fromCountry}
          toCity={SearchResultApi.detailSearch[0].toCity}
          toCountry={SearchResultApi.detailSearch[0].toCountry}
          departure={SearchResultApi.detailSearch[0].departure}
          passenger={SearchResultApi.detailSearch[0].passenger}
          class={SearchResultApi.detailSearch[0].class}
        />
        <Container className="pt-4">
          <Row>
            <Col lg={4}>
              <Row className="align-items-center">
                <Col>
                  <TextHeader1>Filter</TextHeader1>
                </Col>
                <Col lg="auto">
                  <Reset to="/" className="mr-auto">
                    Reset
                  </Reset>
                </Col>
              </Row>
            </Col>
            <Col lg={8}>
              <Row className="align-items-center">
                <Col md="auto" className="m-0 p-0">
                  <TextHeader1>Select Ticket</TextHeader1>
                </Col>
                <Col md="auto" className="m-2 p-0 mr-auto">
                  <TextSecondary>
                    ({SearchResultApi.detailSearch[0].totalTicket} flight found)
                  </TextSecondary>
                </Col>
                <Col md="auto" className="ml-auto m-0 p-0">
                  <TextHeader4>Sort By</TextHeader4>
                </Col>
                <Col md="auto">
                  <img src={verticalSwitch} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <CheckList />
            </Col>
            <Col lg={8} className="m-0 p-0">
              {SearchResultApi.data.map((item) => (
                <CardTicket
                  logoAirlines={item.logoAirline}
                  nameAirlines={item.airline}
                  departure={item.from}
                  departureTime={item.departureTime}
                  arrived={item.to}
                  arrivedTime={item.arrivedTime}
                  period={item.period}
                  transit={item.transit}
                  facilities={item.facilities}
                  price={item.price}
                />
              ))}
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default SearchResult;
