import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections Components
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import InfoSection from "./Sections/InfoSection.js";
import ExamplesSection from "./Sections/ExemplesSection.js";
import SectionCarousel from "./Sections/SectionCarousel.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="GHD Systems"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>GHD Systems</h1>
              <h2>Agência Digital</h2>
              <h3>
                Focados em desenvolver
                produtos digitais, sites e sistemas,
                marketing .Conheça nosso WhatsApp ou Facebook.
                {/* <i className="fab fa-whatsapp" /> */}
              </h3>

              <Button
                color="success"
                size="md"
                href="https://mywhats.net/983292"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="fas fa-play" /> */}
                <i className="fab fa-whatsapp" />
                Whats App
              </Button>
              <Button
                color="info"
                size="md"
                href="https://www.facebook.com/ghdsites"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="fas fa-play" /> */}
                <i className="fab fa-facebook" />
                Facebook
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          {/* <InfoSection /> */}
          <ExamplesSection />
          <SectionCarousel />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
