import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

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

// Import store
import store from "./Redux/store";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Explore} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/forgot-password" component={ForgotPassword} exact />
            <Route path="/find/flight/detail" component={FlightDetails} exact />
            <Route path="/find/search/result" component={SearchResult} exact />
            <PrivateRoute path='/user/booking'>
              <MyBooking />
            </PrivateRoute>
            <PrivateRoute path='/user/booking/detail'>
              <BookingDetail />
            </PrivateRoute>
            <PrivateRoute path='/user/profile'>
              <Profile />
            </PrivateRoute>
            {/* <Route path="/user/Notifications" component={Notifications} exact/> */}
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
