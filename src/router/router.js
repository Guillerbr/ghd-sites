import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//COMPONENTS
import App from "../App";

//PAGES
import Contato from "../pages/contato";
import ErrorPage from "../pages/error";
import Maps from "../pages/maps";
import Blog from "../pages/blog";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/mapa" component={Maps} />
      <Route exact path="/blog" component={Blog} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
