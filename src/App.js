import React, { Component } from "react";
//import styled from "styled-components";

//global responsive styles 
import GlobalStyle from "./styles/globals.js";

//COMPONENTS
import Rodape from "./components/footer";

const App = () => (
  <div>
    <p>About Us</p>

    <Rodape />

    <GlobalStyle />
  </div>
);

export default App;
