import React, { Component } from "react";
import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Root from "./Components/Layouts/Root";

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Root />
      </Router>
    );
  }
}

export default App;
