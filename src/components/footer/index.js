import React from "react";
import "./styles.css";

//ICONS LIBS
import { Lock } from "@styled-icons/material";
import { Support } from "@styled-icons/boxicons-regular/Support";

//STYLES COMPONENTS CSS
import {
  //Title,
  Footer,
  //Footer2,
  //Contact,
  //Information,
  LockStyle,
  SupportStyle,
  ContactTil,
 
} from "./styles";

//routes link
//import { Link } from "react-router-dom";

export function Rodape() {
  return (
    <main className="App">
      <Footer>
      <ContactTil><h2>Contato</h2></ContactTil>
     
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley o galley o
          galley o galley o galley
        </p>
      </Footer>
      <LockStyle>
        <Lock size="48" title="Security" />
        <SupportStyle>
          <Support size="48" title="Support" />
        </SupportStyle>
      </LockStyle>
    </main>
  );
}

export default Rodape;
