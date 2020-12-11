import React, { Component } from "react";
//import styled from "styled-components";

//Bootstrap components

//global responsive styles
//import GlobalStyle from "./styles/globals.js";

//COMPONENTS
//import Rodape from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <i className="fas fa-sitemap"></i> &nbsp; GHD Sites
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMainToggler"
            aria-controls="navbarMainToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <section className="colapse navbar-collapse" id="navbarMainToggler">
            {/* <div className="collapse" id="navbarMainToggler"> */}

            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">
                Home
              </a>
              <a className="nav-item nav-link" href="#">
                Home
              </a>
              <a className="nav-item nav-link" href="#">
                Home
              </a>
            </div>
          </section>
        </nav>

        <div class="container-lg">100% wide until large breakpoint</div>
      </div>
    );
  }
}

export default App;
