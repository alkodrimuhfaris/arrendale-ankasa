/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./styled/style.css";
import { 
  Button, Card, CardBody, Col, Container, DropdownItem, DropdownMenu, 
  DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, Modal, ModalBody, Row 
} from "reactstrap";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";

// import component
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/SideBar";
import CardBooking from "../../Components/CardBooking";

import bookingAction from "../../Redux/actions/booking";

class MyBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "mybook?limit=2",
      list: [],
      alertOpen: false,
      alertMsg: '',
      currentPage: 0,
      totalPage: 0,
      paging: "",
      splitOpen: false,
    };
  }

  componentDidMount() {
    let url = this.state.path
    if (this.props.history.location.search) {
      url = url.concat('&'+this.props.history.location.search.slice(1))
    }
    this.setData(url)
    // this.setData(this.state.path)
  }

  setData = async (url) => {
    await this.props.getData(this.props.auth.token, url);
    this.setState({
      list: this.props.booking.data,
      currentPage: this.props.booking.pageInfo.currentPage,
      totalPage: this.props.booking.pageInfo.pages,
      changePage: this.props.booking.pageInfo.currentPage,
      alertMsg: this.props.booking.alertMsg
    });

    this.showAlert()
    window.scrollTo(0, 200)
  }

  pages = (page) => {
    let paging = ''
    if (page === 'next') {
      paging = this.state.path.concat('&page=').concat(this.state.currentPage+1)
    } else if (page === 'prev') {
      paging = this.state.path.concat('&page=').concat(this.state.currentPage-1)
    } else if (page === 'first') {
      paging = this.state.path.concat('&page=1')
    } else if (page === 'last') {
      paging = this.state.path.concat('&page=').concat(this.state.totalPage)
    } else {
      paging = this.state.path.concat('&page=').concat(page)
    }
    this.setData(paging) && 
    this.props.history.push({
      search: '?'+paging.slice(15),
    })
  }

  inputPage = (e) => {
    const page = e.target.value
    if (page) {
      this.pages(page)
    }
    this.setState({
      changePage: page
    })
  }

  toggleSplit = () => {
    this.setState({
      splitOpen: !this.state.splitOpen
    })
  }

  showAlert = () => {
    if (this.state.alertMsg.includes('Booking from id') || this.state.alertMsg === ''){
      this.setState({
        alertOpen: false
      })
    } else {
      this.setState({
        alertOpen: true
      })
    }
  }

  closeAlert = () => {
    this.setState({
      alertOpen: false,
    })
    this.props.booking.pageInfo.count > 0 &&
    this.pages(1)
  }
  
  render() {
    // console.log(this.props.history)
    return (
      <>
        <NavBar />
        <div className='content-wrapper w-100' style={{backgroundColor: "#F5F6FA"}}>
          <Container>
            <Row className='py-5'>
              <Col md={3} className='sidebar p-3'>
                <Sidebar from='profile' />
              </Col>
              <Col md={9} className='list d-flex flex-column'>
                <Card>
                  <CardBody>
                    <span className='small' style={{color: "#2395FF"}}>M Y  B O O K I N G</span>
                    <div className='font-weight-bold h4 mt-2'>My Booking</div>
                  </CardBody>
                </Card>
                <Modal centered isOpen={this.state.alertOpen}>
                  <ModalBody>
                    <Row className='d-flex align-items-center'>
                      <Col md={9}>
                        <div className='text-center'>
                          {this.state.alertMsg}
                        </div>
                      </Col>
                      <Col md={3} className='d-flex justify-content-end'>
                        <Button onClick={this.closeAlert}>
                          <FaTimes />
                        </Button>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
                {this.state.list && this.state.list.map((i) => (
                  <CardBooking
                    depDate={i.departure_date}
                    depTime={i.departure_time}
                    origin={i.origin_city_country}
                    dest={i.destination_city_country}
                    airlines={i.airlines_name}
                    fCode={i.flight_code}
                    status={i.status}
                    id={i.id} />
                ))}
                {this.state.list && (
                  <div className='d-flex justify-content-center mt-3'>
                    <div style={{width: 250}} className='d-flex'>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <Button 
                            onClick={()=>this.pages('first')}
                            disabled={this.state.currentPage === 1}>
                              <FaAngleDoubleLeft />
                          </Button>
                          <Button 
                            onClick={()=>this.pages('prev')}
                            disabled={this.state.currentPage === 1}>
                              <FaAngleLeft />
                          </Button>
                        </InputGroupAddon>
                        <Input 
                          className='text-center font-weight-bold'
                          style={{color: "#2395FF"}}
                          onChange={this.inputPage}
                          value={this.state.changePage} />
                        <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitOpen} toggle={this.toggleSplit}>
                          <DropdownToggle split />
                          <DropdownMenu>
                            {[...Array(this.state.totalPage)].map((_i, o)=> (
                              <DropdownItem onClick={()=>this.pages(o+1)}>{o+1}</DropdownItem>
                            ))}
                          </DropdownMenu>
                          <Button 
                            onClick={()=>this.pages('next')}
                            disabled={this.state.currentPage === this.state.totalPage}>
                              <FaAngleRight />
                          </Button>
                          <Button 
                            onClick={()=>this.pages('last')}
                            disabled={this.state.currentPage === this.state.totalPage}
                            className='last'>
                              <FaAngleDoubleRight />
                          </Button>
                        </InputGroupButtonDropdown>
                      </InputGroup>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  booking: state.booking
});

const mapDispatchToProps = {
  getData: bookingAction.getBooking,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBooking);
