import React, { Component } from "react";
//import styled from "styled-components";

//Bootstrap components

//global responsive styles
import GlobalStyle from "./styles/globals.js";

//COMPONENTS
import Rodape from "./components/footer";

const App = () => (
  <div>
    <div className="container-fluid">Menu</div>

    <Rodape />

    <GlobalStyle />
  </div>
);

export default App;
