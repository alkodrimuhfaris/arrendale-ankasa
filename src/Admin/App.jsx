import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import manageUser from "./Pages/manageUser";
import manageTicket from "./Pages/manageTicket";
import ticketAdd from "./Pages/ticketAdd";
import ticketEdit from "./Pages/ticketEdit";
import topUp from "./Pages/topUp";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/manage/user" component={manageUser} exact/>
          <Route path="/manage/ticket" component={manageTicket} exact/>
          <Route path="/manage/ticket/add" component={ticketAdd} exact/>
          <Route path="/manage/ticket/edit" component={ticketEdit} exact/>
          <Route path="/manage/user/top_up" component={topUp} exact/>
        </Switch>
      </Router>
    );
  }
}

export default App;
