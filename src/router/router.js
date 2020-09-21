import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components 
// import App from "../App";
// import { Search } from "../components/search";

// import  Login  from "../pages/Login";
// import  ErrorPage   from "../pages/Error";
// import  CompanyProfile  from "../pages/CompanyProfile";
// import  CompanyNews  from "../pages/CompanyNews";
// import  FundamentusApi  from "../pages/FundamentusApi";
// import  SearchStock  from "../pages/FundamentusApi/search";
// import  SearchStockFilter  from "../pages/FundamentusApi/searchstock";

//COMPONENTS 
import App from "../App";

//PAGES
import Contato from "../pages/contato"
import  ErrorPage   from "../pages/error";


import Home from "../pages/home"
//import Global from "../../styles/global";

//import  List  from "../pages/test";
//import { ButtonAppBar } from "../components/menu/menu-top-bar.js";






const Routes = () => (
  <BrowserRouter>
    <Switch>


    {/*
      <Route exact path="/" component={App} /> 
      <Route path="/search" component={Search} />
      <Route path="/menu" component={ButtonAppBar} /> 
      <Route path="/login" component={Login} />
      <Route path="/company" component={CompanyProfile} />
      <Route path="/companynews" component={CompanyNews} />
      <Route path="/fundamentus" component={FundamentusApi} />y
      <Route path="/searchstock" component={SearchStock} />
      <Route path="/searchstockfilter" component={SearchStockFilter} />
      
      <Route path="/teste" component={List} /> 
      */}


      <Route exact path="/" component={App} /> 
      <Route exact path="/contato" component={Contato} />
      <Route component={ErrorPage} />  
      

     <Route exact path="/homee" component={Home} />
      


    </Switch>
  </BrowserRouter>
);

export default Routes;