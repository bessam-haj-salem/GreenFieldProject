import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Provider } from "react-redux";
import Toggleform from "./components/Toggleform";
import SignoutForm from "./components/SignoutForm";
import PrivateRoute from "./components/protected.route";
import store from "./store";
import Template from "./components/template";
import NotFound from "./components/Notfound";
import Login from "./components/Login";
import history from "./history";
import AboutUS from "./components/AboutUs"

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import AboutUs from "./components/AboutUs";

class App extends Component {  

  render() {
    const auth = localStorage.getItem("token");
    console.log("token");
    return (
      <Provider store={store}>
        <div className="main">
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/About" component={AboutUs} />
              <PrivateRoute
                exact
                path="/Home"
                component={Template}
                auth={auth}
              />
              <Route exact component={NotFound} />
            </Switch>
          </Router>
          {/* <NavigationBar /> */}
          {/* <Template /> */}
          {/* <Route exact path="/Home" component={Template} /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
