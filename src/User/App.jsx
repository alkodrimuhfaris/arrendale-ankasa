import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
// import ForgotPassword from "./Pages/ForgotPassword";
// import Explore from "./Pages/Explore";
import SearchResult from "./Pages/SearchResult/";
// import FlightDetails from "./Pages/FlightDetails";
import MyBooking from "./Pages/MyBooking";
// import BookingDetail from "./Pages/BookingDetail";
// import Profile from "./Pages/Profile";
// import Notofications from "./Pages/Notofications";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/auth/login" component={Login} exact/> */}
          <Route path="/signup" component={Signup} exact/>
          {/* <Route path="/auth/forgot-password" component={ForgotPassword} exact/> */}
          {/* <Route path="/find" component={Explore} exact/> */}
          {/* <Route path="/find/search/result" component={SearchResult} exact/> */}
          {/* <Route path="/find/flight/details" component={FlightDetails} exact/> */}
          <Route path="/user/booking" component={MyBooking} exact />
          <Route path="/find/search/result" component={SearchResult} exact/>
          {/* <Route path="/find/flight/details" component={FlightDetails} exact/> */}
          {/* <Route path="/user/booking" component={MyBooking} exact/> */}
          {/* <Route path="/user/booking/detail" component={BookingDetail} exact/> */}
          {/* <Route path="/user/profile" component={Profile} exact/> */}
          {/* <Route path="/user/Notifications" component={Notifications} exact/> */}
        </Switch>
      </Router>
    );
  }
}
export default App;
