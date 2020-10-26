import React from "react";
//import Img from 'react-image'

//routes link
import { Link } from "react-router-dom";

//css styles
import "./styles.css";

//mateiral ui
import Button from "@material-ui/core/Button";

//image assets
//import Logo from "./logo.png"

export function ErrorPage() {
  return (
    <main className="App">
      {/* <img
        src="https://image.freepik.com/fotos-gratis/imagem-cenico-da-arvore-de-abetos-vermelhos-dia-gelado-cena-invernal-calma_146671-15226.jpg"
        alt="Logo"
      /> */}

      <h1>Content not found!</h1>
      <h2>OOPS</h2>
      {/* <img src={ Logo }/> */}

      <Link
        component={Button}
        to="/"
        color="inherit"
        style={{ textTransform: "none", color: "red" }}
      >
        Back
      </Link>
    </main>
  );
}

export default ErrorPage;
