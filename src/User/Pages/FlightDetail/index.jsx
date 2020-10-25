/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import { Container, Row, Col, Label, FormGroup, Input,
  Modal, ModalBody, ModalFooter, Button,
} from "reactstrap";
import { connect } from "react-redux";

// Import action
import userAction from "../../Redux/actions/profile";
import flightAction from "../../Redux/actions/flight";
import bookingAction from "../../Redux/actions/booking";

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
  PaymentMethod,
} from "./styled";



//Images
import bigFlight from "../../Assets/big-flight.png";

//API
// import FlightDetailApi from "../../API/FlightDetail";

export class FlightDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flight_detail_id: "1",
      quantity: "1", 
      cpId: "0",
      full_name_cp: "",
      email: "",
      phone_number: "",
      passangerArray: [],
      insurance: "",
      payment_method: "later",
      modalOpen: false,
    }
  }

  componentDidMount(){
    const token = localStorage.getItem("token");
    this.props.getProfile(token);
  }
  

  handleChangePayment = (e) => {
    const isChecked = e.target.checked;
    const { name, value } = e.target;
    if (isChecked) {
      this.setState({
        [name]: value,
      });
    }
  };

  onProcessPayment = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const { 
      flight_detail_id,
      quantity,
      cpId,
      full_name_cp,
      email,
      phone_number,
      passangerArray,
      insurance,
      payment_method,
     } = this.state;

    const data = {
      flight_detail_id,
      quantity,
      cpId,
      full_name_cp,
      email,
      phone_number,
      passangerArray,
      insurance,
      payment_method,
    };

    this.props.postBooking(token, data);
    this.setState({modalOpen: true})
  }

  closeModal = () => {
    this.props.clearMsg()
    this.setState({
      modalOpen: false,
    })
  }

  render() {
    const { data } = this.props.profile;
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
              {data.length && (
                <FormContactPerson name={data[0].username} email={data[0].email} phone={data[0].phone_number} />
              )}
              <div className="mb-2 mt-5">
                <Heading1 inputColor="#000000">Passenger Details</Heading1>
              </div>
              <FormPassengerDetail className name="" />
              <div className="mb-2 mt-5">
                <Heading1 inputColor="#000000">Passenger Details</Heading1>
              </div>
              <FormInsurance />
            </Col>
            <Col lg={4}>
              {/* <CardFlightDetail
                refundable={true}
                reschedule={false}
              /> */}
              <PaymentMethod>
                <div className="d-flex flex-column p-3">
                  <div className="mb-3">
                    <h5>Payment Method</h5>
                  </div>
                  <FormGroup className="d-flex justify-content-between px-2">
                    <div>
                      <Label for="ankasaPayment">Ankasa Payment</Label>
                    </div>
                    <div>
                      <Input onChange={this.handleChangePayment} type="checkbox" id="ankasaPayment" name="payment_method" value="ankasa payment" />
                    </div>
                  </FormGroup>
                  <FormGroup className="d-flex justify-content-between px-2">
                    <div>
                      <Label for="payLater">Pay Later</Label>
                    </div>
                    <div>
                      <Input onChange={this.handleChangePayment} type="checkbox" id="payLater" name="payment_method" value="later" />
                    </div>
                  </FormGroup>
                </div>
              </PaymentMethod>
            </Col>
          </Row>
          <Row className="justify-content-center m-5">
            <Col lg={8}>
              <PaymentButton onClick={this.onProcessPayment}>Proceed to Payment</PaymentButton>
            </Col>
          </Row>
        </Container>
        <Footer />
        <Modal isOpen={this.state.modalOpen}>
          <ModalBody>
            {this.props.booking.alertMsg}
          </ModalBody>
          <ModalFooter>
              <Button onClick={this.closeModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  flight: state.flight,
  booking: state.booking,
});

const mapDispatchToProps = {
  getProfile: userAction.getProfile,
  getFlightDetail: flightAction.getFlightDetail,
  postBooking: bookingAction.postBooking,
  clearMsg: bookingAction.clearMsg,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetail);
