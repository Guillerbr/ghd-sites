import React from 'react';
import './styles.css';

//routes link
import { Link } from "react-router-dom";

export function Contato() {
    return (
      <main className="App">
        <h1>Contato</h1>
        
  
        <Link
         // component={Button}
          to="/"
          color="inherit"
          style={{ textTransform: "none", color: "red" }}
        >
          Back
        </Link>
      </main>
    );
  }
  
  export default Contato;


