import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

class App extends React.Component {
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
export default App;
