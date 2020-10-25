/* eslint-disable react/prop-types */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import Explore from "./Pages/Explore";
import SearchResult from "./Pages/SearchResult/";
import FlightDetails from "./Pages/FlightDetail";
import MyBooking from "./Pages/MyBooking";
import BookingDetail from "./Pages/BookingDetail";
import Profile from "./Pages/Profile";
// import Notofications from "./Pages/Notofications";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import authAction from "../User/Redux/actions/auth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      isLogin: false,
    };
  }

  async componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.setToken(localStorage.getItem("token"));
    }
    await this.props.auth;
    this.setState({
      token: this.props.auth.token,
      isLogin: this.props.auth.isLogin
    });
  }

  render() {
    return (
      //     DONT TOUCH ROUTE PATH PLEASE
      <Router>
        <Switch>
          {/** THIS IS PUBLIC ROUTE */}
          <Route path="/" component={Explore} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/forgot-password" component={ForgotPassword} exact />
          <Route path="/search/result" component={SearchResult} exact />
          {/** THIS IS PRIVATE ROUTE */}
          <PrivateRoute exact path="/flight/detail">
            <FlightDetails />
          </PrivateRoute>
          <PrivateRoute exact path="/booking">
            <MyBooking />
          </PrivateRoute>
          <PrivateRoute exact path="/booking/detail">
            <BookingDetail />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          {/* <Route path="/Notifications" component={Notifications} exact/> */}
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  setToken: authAction.setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);