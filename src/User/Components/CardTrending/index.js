/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import btn from "../../Assets/img/btnback.png";
import { connect } from "react-redux";
import "./style/style.css";

// Import action
import cityAction from "../../Redux/actions/city";

class CardTrending extends Component {
  componentDidMount(){
    this.props.getCityTrending();
  }

  render() {
    const { REACT_APP_BACKEND_URL } = process.env;
    const { dataCityTrending } = this.props.city;
    return (
      <div className="d-flex mb-5">
        {dataCityTrending.length && dataCityTrending.map((e) => (
          <Card className="card-tranding shadow p-2 mr-3 mb-5">
            <CardImg className="img-trending" top src={REACT_APP_BACKEND_URL.concat(e.city_picture)} alt={e.city_name} />
            <CardBody>
              <CardTitle className="small font-weight-bold">{e.city_name},</CardTitle>
              <div className="d-flex justify-content-between">
                <CardSubtitle className="txt-country font-weight-bold">{e.country_name}</CardSubtitle>
                <Button className="btn-prev d-flex align-items-center justify-content-center rounded-circle">
                  <img src={btn} alt="button" />
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = {
  getCityTrending: cityAction.getCityTrending,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardTrending);