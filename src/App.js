import React, { Component } from "react";
import Firebase from "./firebase";
//import styled from "styled-components";
//import Routes from "./router/router.js";

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

            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link text-success" href="http://localhost:3001/contato">
                Contato
              </a>
              <a className="nav-item nav-link text-success" href="#">
                Home
              </a>
              <a className="nav-item nav-link text-success" href="#">
                Home
              </a>
            </div>
            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend"></div>
              </div>
            </form>
          </section>
        </nav>

        <section className="container">
          <ul className="list-unstyled">
            <li className="media">
              <img
                src="https://placeimg.com/240/180/any"
                alt=""
                className="rounded float-left"
               
                
              />
            </li>
          </ul>
        </section>


        {/* EN NAV COMPOT */}

        <div className="container">
          <div className="row align-items-start">
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
          </div>
          <div className="row align-items-center">
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
          </div>
          <div className="row align-items-end">
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>

        <div className="media">
          {/* <img src="" class="align-self-start mr-3" alt=""> */}
          <div className="media-body">
            <h5 className="mt-0">Top-aligned media</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
            <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Envie sua mensagem:</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>




        {/* FOOTER COMPONENT */}
        

        <footer className="container col-12 pt-3 footer bg-dark text-success text-center">  
        <h2>Contato</h2>
        
          <container className="container col-6 col-md-2 d-flex justify-content-around">
            <i class="fab fa-google"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-github"></i>
          </container>


          <h2>Contato</h2>
        </footer>

        {/* end */}
      </div>
    );
  }
}

export default App;
