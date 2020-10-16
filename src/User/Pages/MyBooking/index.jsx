import React, { Component } from "react";
import "./styled/style.css";
import { 
  Card,
  CardBody,
  Col,
  Container, Row 
} from "reactstrap";

// import component
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import CardBooking from "../../Components/CardBooking";

export default class MyBooking extends Component {
  componentDidMount() {
    console.log("lala");
  }
  
  render() {
    return (
      <>
        <NavBar />
        <div className='vh-100 w-100' style={{backgroundColor: "#F5F6FA"}}>
          <Container>
            <Row className='py-5'>
              <Col md={3} className='sidebar p-3'>
                sidebar
              </Col>
              <Col md={9}>
                <Card>
                  <CardBody>
                    My Booking
                  </CardBody>
                </Card>
                <CardBooking />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}
