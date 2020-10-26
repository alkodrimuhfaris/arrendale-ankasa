/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import {Container, Row, Col} from "reactstrap";
import { connect } from "react-redux";

//Components
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import BookingPass from "../../Components/BookingPass";
import BarCode from "../../Components/BarCode";

//API
import BookingDetailApi from "../../API/BookingDetail";

//Styled
import {
  GlobalStyle,
  Card,
  Heading1
} from "./styled";

import dateFormat from "../../Helper/dateFormat";

export class BookingDetail extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
      

  render() {
    const { detail} = this.props.booking;
    // eslint-disable-next-line no-undef
    const { REACT_APP_BACKEND_URL } = process.env;
    return (
      <>
        <GlobalStyle />
        <NavBar />
        <Container className="h-100 pt-5 pb-5 bg-info" fluid={true}>
          <Card className="mx-auto">
            <Container>
              <Row>
                <Col md={12} className="mb-4">
                  <Heading1>Booking Pass</Heading1>
                </Col>
                <Col md={8}>
                  {detail.map((item) => (
                    <BookingPass
                      airlineLogo={REACT_APP_BACKEND_URL+item.airlines_logo}
                      from={item.origin_city_country}
                      to={item.destination_city_country}
                      code={item.flight_code}
                      class={item.class_name}
                      terminal="A"
                      gate="221"
                      departure={dateFormat(item.departure_date)}
                    />
                  ))}
                </Col>
                <Col
                  md={4}
                  className="mx-auto m-auto"
                >
                  <BarCode code={BookingDetailApi.data[0].barcodeValue} />
                </Col>
              </Row>
            </Container>
          </Card>
        </Container>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  booking: state.booking,
});
export default connect(mapStateToProps, null)(BookingDetail);
