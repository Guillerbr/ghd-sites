import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import styles from "assets/jss/material-kit-react/views/landingPage.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ContatoPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <h1>Contato</h1>
      <h3>Formulário</h3>
      <h4>Mapa</h4>
      <h5>Rodapé</h5>

    </div>
  );
}
