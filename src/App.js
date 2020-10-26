import React, { Component } from "react";
import styled from "styled-components";

//global styleds
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

/*

DOCs:

https://dev.to/carloscne/criando-paginas-responsivas-e-adaptativas-com-react-e-styled-components-1gje


*/
