import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons


// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/Footer.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
// import CustomInput from "components/CustomInput/CustomInput.js";

// import styles from "assets/jss/material-kit-react/views/loginPage.js";
// import image from "assets/img/bg7.jpg";
// const useStyles = makeStyles(styles);

// export default function Blog() {
//   return (
//     <div>
//       <h1>BLOG ROUTER</h1>
//     </div>
//   );
// }


// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";

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

// Sections for this page
// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function DesignerPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="GHD Designer"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}
                {...rest}
            />
            <Parallax filter image={require("assets/img/img000243.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>GHD Designer</h1>
                            <h2>Designer</h2>
                            <h3>
                                Construção de marcas, branding, identidade visual corporativa,
                                papelaria corporativa, manual de identidade visual, redesign
                                e modernização de logotipos, logomarcas e símbolos.... {" "}
                                {/* <br></br>
                                <i className="fab fa-whatsapp" />
                                {" "}
                                <i className="fab fa-instagram" />
                                {" "}
                                <i className="fab fa-facebook" />
                                {" "} */}
                            </h3>
                            <h3>Solicite uma avaliação :</h3>
                            <br />
                            <Button
                                color="success"
                                size="lg"
                                href="https://mywhats.net/983292"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* <i className="fas fa-play" /> */}
                                <i className="fab fa-whatsapp" />
                WhatsApp
              </Button>
                            <Button
                                color="info"
                                //severity="info"
                                size="lg"
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
                    {/* <ProductSection />
          <TeamSection />
          <WorkSection /> */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

