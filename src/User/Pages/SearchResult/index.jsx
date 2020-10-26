/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

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
    const { isLoading, isError, data, info, alertMsg } = this.props.searchResult;
    // eslint-disable-next-line no-undef
    const { REACT_APP_BACKEND_URL } = process.env;
    return (
      <>
        <GlobalStyle />
        <NavBar />
        <BackgroundDetailSearch>
          <img src={bigFlight} alt="" />
        </BackgroundDetailSearch>
        <SearchDetail
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
                    ({info.count} flight found)
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
              {/* {SearchResultApi.data.map((item) => (
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
              ))} */}
              {isLoading &&
                !isError &&
                [...Array(8)].forEach(() => (
                  <CardTicket
                    logoAirlines="Loading..."
                    nameAirlines="Loading..."
                    departure="Loading..."
                    departureTime="Loading..."
                    arrived="Loading..."
                    arrivedTime="Loading..."
                    period="Loading..." //KOSONG
                    transit="Loading..."
                    facilities="Loading..." //KOSONG
                    price="Loading..."
                  />
                ))}
              {!isLoading && isError && <div>{alertMsg}</div>}
              {!isLoading &&
                !isError &&
                data.length !== 0 &&
                data.map((item) => (
                  <CardTicket
                    logoAirlines={REACT_APP_BACKEND_URL + item.airline_logo}
                    nameAirlines={item.airlines}
                    departure={item.origin_city_country}
                    departureTime={item.departure_time}
                    arrived={item.destination_city_country}
                    arrivedTime={item.arrived_time}
                    period={SearchResultApi.data[1].period} //KOSONG
                    transit={item.transit_id}
                    facilities={SearchResultApi.data[1].facilities} //KOSONG
                    price={item.price}
                    ticketId={item.flight_detail_id}
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

const mapStateToProps = (state) => ({
  searchResult: state.findTicket,
});
export default connect(mapStateToProps, null)(SearchResult);
