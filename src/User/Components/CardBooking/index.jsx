/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { 
  Card, CardBody, Row, Col, Button, Modal, ModalBody, 
  ModalHeader, Table, Badge, ModalFooter 
} from "reactstrap";
import "./styled/style.css";
import { FaChevronDown, FaInfoCircle, FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Currency from 'react-currency-format'
import dateFormat from "../../Helper/dateFormat";

// import image
import flight from "../../Assets/flight.svg";

import bookingAction from "../../Redux/actions/booking";

const { REACT_APP_BACKEND_URL } = process.env;

class CardBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      alertOpen: false,
      depDate: dateFormat(this.props.depDate),
      depTime: this.props.depTime.slice(0,5)
    };
  }

  showPayment = async (id) => {
    await this.props.getData(this.props.token, id)
    this.setState({
      modalOpen: true
    })
  }

  pay = async (id) => {
    const data = {
      booking_id: id
    }
    await this.props.setPayment(this.props.token, data)
    this.setState({
      modalOpen: false,
      alertOpen: true,
    })
  }

  render() {
    const { data, detail, alertMsg } = this.props.booking
    return (
      <>
        <Card className='mt-4'>
          <CardBody className='p-0 d-flex flex-column'>
            <div className='content p-4'>
              <div className='h6'>{this.state.depDate} - {this.state.depTime}</div>
              <div className='d-flex align-items-center my-2'>
                <div className='h5 m-0 font-weight-bold'>{this.props.origin}</div>
                <div className='mx-3'>
                  <img src={flight} alt='flight' />
                </div>
                <div className='h5 m-0 font-weight-bold'>{this.props.dest}</div>
              </div>
              <div className='h6 m-0 text-muted'>{this.props.airlines}, {this.props.fCode}</div>
            </div>
            <div className='footer p-4'>
              <Row className='d-flex align-items-center'>
                <Col md={2}>
                  <div className='h6 m-0 text-muted font-weight-bold'>Status</div>
                </Col>
                <Col md={3}>
                  {this.props.status === 0 ?
                    <div className='status-waiting text-center py-1 small font-weight-bold'>
                      Waiting for payment
                    </div> :
                    <div className='status-success text-center py-1 small font-weight-bold'>
                      Eticket Issued
                    </div> 
                  }
                </Col>
                <Col md={7}>
                  <div className='text-right'>
                    {this.props.status===0?
                      <Button className='detail p-0' onClick={()=>this.showPayment(this.props.id)}>
                        <div className='font-weight-bold' style={{color: "#2395FF"}}>
                          View Details <FaChevronDown />
                        </div>
                      </Button>:
                      <Link to={`/booking/detail/${this.props.id}`} className='text-decoration-none'>
                        <div className='font-weight-bold' style={{color: "#2395FF"}}>
                          View Details <FaChevronDown />
                        </div>
                      </Link>}
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
        {data && (
          <Modal className='payment' centered isOpen={this.state.modalOpen}>
            <ModalHeader>
              <div className='h3 font-weight-bold m-0'>
                Payment
              </div>
            </ModalHeader>
            <ModalBody>
              <Row className='d-flex align-items-center'>
                <Col md={6}>
                  <Row>
                    <Col md={12} className='d-flex align-items-center justify-content-center'>
                      <Row>
                        <Col md={4} className='my-3'>
                          <div>
                            <img src={REACT_APP_BACKEND_URL.concat(data.airlines_logo)} alt='logo airlines' />
                          </div>
                        </Col>
                        <Col md={3}>
                          <div className='h2 m-0 font-weight-bold text-center my-3'>
                            {this.props.origin}
                          </div>
                        </Col>
                        <Col md={2} style={{height: 40}} className='text- my-3'>
                          <img style={{height: '100%', width: 'auto'}} src={flight} alt='...' />
                        </Col>
                        <Col md={3}>
                          <div className='h2 m-0 font-weight-bold text-center my-3'>
                            {this.props.dest}
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={12} className='my-3'>
                      <div className='small tex-muted'>
                        Departure Date
                      </div>
                      <div className='h4 m-0 font-weight-bold text-center'>
                        {this.state.depDate+' - '+this.state.depTime}
                      </div>
                    </Col>
                    <Col md={3} className='my-3'>
                      <div className='small tex-muted'>
                        Code
                      </div>
                      <div className='h4 m-0 font-weight-bold text-center'>
                        {this.props.fCode}
                      </div>
                    </Col>
                    <Col md={3} className='my-3'>
                      <div className='small tex-muted'>
                        Class
                      </div>
                      <div className='h4 m-0 font-weight-bold text-center'>
                        {data.class_name}
                      </div>
                    </Col>
                    <Col md={3} className='my-3'>
                      <div className='small tex-muted'>
                        Terminal
                      </div>
                      <div className='h4 m-0 font-weight-bold text-center'>
                        {/* {data.class_name} */}
                        A
                      </div>
                    </Col>
                    <Col md={3} className='my-3'>
                      <div className='small tex-muted'>
                        Gate
                      </div>
                      <div className='h4 m-0 font-weight-bold text-center'>
                        {/* {data.class_name} */}
                        221
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col md={12} className='my-3'>
                      <div className='small tex-muted'>
                        Passager Detail
                      </div>
                      <Table>
                          <thead>
                            <tr>
                              <th className='small text-muted'>No.</th>
                              <th className='small text-muted'>Passager Name</th>
                              <th className='small text-muted'>Passager Nationality</th>
                            </tr>
                          </thead>
                          <tbody>
                            {detail && detail.map((i, o)=>(
                              <tr>
                                <th scope='row'>{o+1}</th>
                                <td>{i.passanger_title+' '+i.passanger_name}</td>
                                <td>{i.passanger_nationality}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                    </Col>
                    <Col md={8}>
                      <div className='h5 m-0 font-weight-bold'>
                        Total Payment
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className='h4 m-0 font-weight-bold text-right' style={{color: "#2395FF"}}>
                        <Currency value={data.price} displayType={"text"} thousandSeparator={true} prefix={"$ "} suffix={',00'} />
                      </div>
                    </Col>
                    <Col md={12} className='text-right'>
                      {data.insurance===1?
                        <Badge color='primary'>
                          <div><FaInfoCircle /> Travel Insurance included</div>
                        </Badge> :
                        <Badge color='warning'>
                          <div><FaInfoCircle />No Travel Insurance included</div>
                        </Badge>
                      }
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button onClick={()=>this.pay(this.props.id)} className='pay'>
                Pay Ticket
              </Button>
              <Button onClick={()=>this.setState({modalOpen: false})}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        )}
        <Modal centered isOpen={this.state.alertOpen}>
          <ModalBody className='text-center'>{alertMsg}</ModalBody>
          <ModalFooter className='payment'>
            <Link to={`/booking/detail/${this.props.id}`} className='text-decoration-none'>
              <Button className='pay font-weight-bold'>
                View Ticket
              </Button>
            </Link>
            <Button onClick={()=>this.setState({alertOpen: false})}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  booking: state.booking
});

const mapDispatchToProps = {
  getData: bookingAction.getDetail,
  setPayment: bookingAction.payment
};

export default connect(mapStateToProps, mapDispatchToProps)(CardBooking);
