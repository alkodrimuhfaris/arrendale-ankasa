import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { connect } from 'react-redux'

//import style
import "./style/style.css";

// import component
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Carousel";
import CardSearchFlight from "../../Components/CardSearchFlight";
import CardTrending from '../../Components/CardTrending'

//import picture
import pict1 from "../../Assets/img/destination1.png";
import pict2 from "../../Assets/img/destination2.png";
import decor from "../../Assets/img/decoration.png";

//import redux action
import listTrending from '../../Redux/actions/trending'

class Explore extends Component {
  componentDidMount() {
    this.props.dataTrending()
  }


  render() {
    const { isLoading, isError, data, alertMsg } = this.props.trendingData
    return (
      <>
        <Navbar />
        <CardSearchFlight />
        <Row className="up">
          <Col sm={6} >
            <div className="tag-text">Find your <span className="flight">Flight</span></div>
            <div className="text-secondary">and explore world with us</div>
          </Col>
          <Col sm={6} className="d-flex justify-content-end">
            <img className="image-1" src={pict1} alt="destination 1" />
          </Col>
        </Row>
        <Row>
          <Col sm={8} m-5>
            <img className="image-2" src={pict2} alt="destination 2" />
          </Col>
          <Col sm={4} className="align-self-end">
            <img className="decor-img" src={decor} alt="decoration" />
          </Col>
        </Row>
        <Container>
          <div className="text-primary font-weight-bold mt-5">Trending</div>
          <Row className="mb-3">
            <Col sm={6} className="font-weight-bold h5">Trending Destination </Col>
            <Col sm={6} className="text-right">
              <Link className="text-decoration-none font-weight-bold">view all</Link>
            </Col>
          </Row>
          <div className="d-flex">
            {!isLoading && !isError && data.length !== 0 && data.map(item => {
              return (
                <CardTrending city={item.city_name} country={item.country_name}/>
              )
            })}
          </div>
          {isLoading && !isError && (
            <div>Loading</div>
          )}
          {isError && alertMsg !== '' && (
            <div>{alertMsg}</div>
          )}
          <Carousel />
        </Container>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  trendingData: state.trending
})

const mapDispatchToProps = {
  dataTrending: listTrending.getTrending
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)
