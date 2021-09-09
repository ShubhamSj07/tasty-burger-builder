import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
