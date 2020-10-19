import React, { Component } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import "./styled/style.css";
import { FaChevronDown } from "react-icons/fa";


// import image
import flight from "../../Assets/flight.svg";

export default class CardBooking extends Component {
  render() {
    return (
      <>
        <Card className='my-4'>
          <CardBody className='p-0 d-flex flex-column'>
            <div className='content p-4'>
              <div className='h6'>Monday, 20 July ‘20 - 12:33</div>
              <div className='d-flex align-items-center my-3'>
                <div className='h5 font-weight-bold'>IDN</div>
                <div className='mx-3'>
                  <img src={flight} alt='flight' />
                </div>
                <div className='h5 font-weight-bold'>JPN</div>
              </div>
              <div className='h6 text-muted'>Garuda Indonesia, AB-221</div>
            </div>
            <div className='footer p-4'>
              <Row className='d-flex align-items-center'>
                <Col md={2}>
                  <div className='h6 m-0 text-muted font-weight-bold'>Status</div>
                </Col>
                <Col md={3}>
                  <div className='status-waiting text-center py-1 small font-weight-bold'>
                    Waiting for payment
                  </div>
                </Col>
                <Col md={7}>
                  <div className='text-right font-weight-bold' style={{color: "#2395FF"}}>
                    View Details <FaChevronDown />
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}
