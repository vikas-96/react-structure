import React, { Component } from "react";
import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Root from "./Components/Layouts/Root";
import initAxios from "./utils/initAxios";

const browserHistory = createBrowserHistory();
initAxios();
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
