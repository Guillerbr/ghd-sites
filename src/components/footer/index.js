import React from "react";
import "./styles.css";

//ICONS LIBS
import { Lock } from '@styled-icons/material'

//STYLES COMPONENTS CSS 
import { Title, Footer, Footer2, Contact, Information ,LockStyle } from "./styles";

//routes link
//import { Link } from "react-router-dom";

export function Rodape() {
  return (
    <main className="App">
      
      <Footer>
        <h2>Contato</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley o galley o
          galley o galley o galley
        </p>
        
      </Footer>
      <LockStyle>
      <Lock size="48" title="Unlock account" />
      </LockStyle>
    </main>
  );
}

export default Rodape;
