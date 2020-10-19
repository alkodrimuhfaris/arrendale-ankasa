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
import Sidebar from "../../Components/SideBar";
import CardBooking from "../../Components/CardBooking";

export default class MyBooking extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className='content-wrapper w-100' style={{backgroundColor: "#F5F6FA"}}>
          <Container>
            <Row className='py-5'>
              <Col md={3} className='sidebar p-3'>
                <Sidebar />
              </Col>
              <Col md={9}>
                <Card>
                  <CardBody>
                    <span className='small' style={{color: "#2395FF"}}>M Y  B O O K I N G</span>
                    <div className='font-weight-bold h4 mt-2'>My Booking</div>
                  </CardBody>
                </Card>
                <CardBooking />
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
