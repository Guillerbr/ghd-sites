import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages routes
import Components from "views/Components/Components.js";
import Blog from "views/Blog/BlogPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import MarketingPage from "views/MarketingPage/MarketingPage.js";
import DesignerPage from "views/DesignerPage/DesignerPage.js";
import SoftwarePage from "views/SoftwarePage/SoftwarePage.js";
import MapPage from "views/MapPage/MapPage.js";
import ContatoPage from "views/ContatoPage/ContatoPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} /> */}
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      {/* <Route path="/login-page" component={LoginPage} /> */}
      <Route path="/marketing" component={MarketingPage} />
      <Route path="/designer" component={DesignerPage} />
      <Route path="/software" component={SoftwarePage} />
      <Route path="/empresa" component={Components} />
      <Route path="/map" component={MapPage} />
      <Route path="/blog" component={Blog} />
      <Route path="/contato" component={ContatoPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
