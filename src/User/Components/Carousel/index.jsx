/* eslint-disable react/prop-types */
import React from "react";
import { 
  Container,
} from "reactstrap";
import "./style/style.css";

// Import Carousel
import Carousel from "react-elastic-carousel";

// Import image
import imgBig from "../../Assets/img/flight.png";
import paris from "../../Assets/paris.jpg";

class Slide extends React.Component {
  render() {
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
              <Carousel pagination={false} itemsToShow={5} itemsToScroll={5} showArrows={true}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                    <img className="rounded-circle" src={paris} alt="paris"/>
                  </div>
                  <div className="text-white text-uppercase">
                    <span>Paris</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                    <img className="rounded-circle" src={paris} alt="paris"/>
                  </div>
                  <div className="text-white text-uppercase">
                    <span>Paris</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                    <img className="rounded-circle" src={paris} alt="paris"/>
                  </div>
                  <div className="text-white text-uppercase">
                    <span>Paris</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                    <img className="rounded-circle" src={paris} alt="paris"/>
                  </div>
                  <div className="text-white text-uppercase">
                    <span>Paris</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                    <img className="rounded-circle" src={paris} alt="paris"/>
                  </div>
                  <div className="text-white text-uppercase">
                    <span>Paris</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                    <img className="rounded-circle" src={paris} alt="paris"/>
                  </div>
                  <div className="text-white text-uppercase">
                    <span>Paris</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                    <img className="rounded-circle" src={paris} alt="paris"/>
                  </div>
                  <div className="text-white text-uppercase">
                    <span>Paris</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                    <img className="rounded-circle" src={paris} alt="paris"/>
                  </div>
                  <div className="text-white text-uppercase">
                    <span>Paris</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                    <img className="rounded-circle" src={paris} alt="paris"/>
                  </div>
                  <div className="text-white text-uppercase">
                    <span>Paris</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex justify-content-center align-items-center carousel rounded-circle mb-4">
                    <img className="rounded-circle" src={paris} alt="paris"/>
                  </div>
                  <div className="text-white text-uppercase">
                    <span>Paris</span>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Slide;