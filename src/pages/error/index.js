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

      <img
        src="https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_8030430.htm#page=1&query=404%20not%20found&position=11"
        alt="OOPS"
      />

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
