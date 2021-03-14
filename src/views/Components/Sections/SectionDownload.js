/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Como podemos ajudar sua empresa?</h2>
            <h4>
              Seu site terá funcionalidades exclusivas visando converter visitantes em clientes.
              Você poderá ter Chat Online, PopUps Inteligentes, Integração com Email Marketing,
              Redes Sociais, Google Analytics, Integração com plataformas de pagamento digital
              e muitas outras ferramentas! Entre em contato conosco!
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="blue"
              size="lg"
              href="http://localhost:3000/contato"
              // Link to="http://localhost:3000/front-page"
              target="_blank"
            >
              Contato
            </Button>
            <Button
              color="blue"
              size="lg"
              href="http://localhost:3000/blog"
              target="_blank"
            >
              Blog
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Conheça alguns de nossos trabalhos!</h2>
            <h4>
              {/* We{"'"}ve launched{" "} */}
              <a
                href="https://www.portalviscondedemaua.com/"
                target="_blank"
              >
                Portal Visconde de Mauá{" "}
              </a>
              Eleita uma das regiões mais lindas do Brasil!
              Conheça As Melhores Opções de Hospedagem em Visconde de Mauá
              Escolha a sua e venha viver dias inesquecíveis.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="rose"
              size="lg"
              href="https://www.portalviscondedemaua.com/"
              target="_blank"
            >
              Portal Visconde de Mauá
            </Button>
            <Button
              color="rose"
              size="lg"
              href="https://www.colegioict.com.br/"
              target="_blank"
            >
              Colégio ICT
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Obrigado por conhecer nosso trabalho, fique ligado em nossas redes sociais!</h3>
          </GridContainer>
          <Button color="twitter" href="https://mywhats.net/983292">

            <i className={classes.socials + " fab fa-whatsapp"} /> WhatsApp
          </Button>
          <Button color="facebook" href="https://www.facebook.com/ghdsites">
            <i className={classes.socials + " fab fa-facebook-square"} /> Facebook
          </Button>
          {/* <Button color="google">
            <i className={classes.socials + " fab fa-google-plus-g"} />
            Share
          </Button>
          <Button color="github">
            <i className={classes.socials + " fab fa-github"} /> Star
          </Button> */}
        </div>
      </div>
    </div>
  );
}