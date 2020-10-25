import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import topUp from "./Pages/topUp";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/manage/user/top_up" component={topUp} exact/>
        </Switch>
      </Router>
    );
  }
}

export default App;
