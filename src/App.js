import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
