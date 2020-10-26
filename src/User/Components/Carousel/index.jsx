/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { 
  Container,
} from "reactstrap";
import "./style/style.css";

// Import Carousel
import Carousel from "react-elastic-carousel";

// Import image
import imgBig from "../../Assets/img/flight.png";

// Import action
import cityAction from "../../Redux/actions/city";

class Slide extends React.Component {
  componentDidMount(){
    this.props.getCityTopTen();
  }

  render() {
    const { REACT_APP_BACKEND_URL } = process.env;
    const { dataCityTopTen } = this.props.city;
    return (
      <React.Fragment>
        <Container>
          <div className="wrapper-carousel position-relative mt-5">
            <img className="bg position-absolute" src={imgBig} alt="logo-big"/>
            <div className="w-100 h-100 position-absolute d-flex flex-column justify-content-center align-items-center">
              <div className="text-white mb-3">
                <span>T o p 1 0</span>
              </div>
              <div className="text-white top-10 font-weight-bold">
                <span>Top 10 destinations</span>
              </div>
              {dataCityTopTen.length && (
                <Carousel pagination={false} itemsToShow={5} itemsToScroll={1} showArrows={true}>
                  {dataCityTopTen.length && dataCityTopTen.map(e => (
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                        <img className="img-city rounded-circle" src={REACT_APP_BACKEND_URL.concat(e.city_picture)} alt={e.city_name} />
                      </div>
                      <div className="text-white text-uppercase">
                        <span>{e.city_name}</span>
                      </div>
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProp = (state) => ({
  city: state.city,
});

const mapDispatchToProp = {
  getCityTopTen: cityAction.getCityTopTen,
};

export default connect(mapStateToProp, mapDispatchToProp)(Slide);