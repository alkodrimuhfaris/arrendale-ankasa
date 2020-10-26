/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import {Container, Row, Col} from "reactstrap";

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

export class BookingDetail extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
      

  render() {
    
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
                  {BookingDetailApi.data.map((item) => (
                    <BookingPass
                      airlineLogo={item.airlineLogo}
                      from={item.from}
                      to={item.to}
                      code={item.code}
                      class={item.class}
                      terminal={item.terminal}
                      gate={item.gate}
                      departure={item.departure}
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

export default BookingDetail;
