import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

// images corrousel lading page
import image1 from "assets/img/admindashb-5.png";
import image2 from "assets/img/admindashb-4.png";
import image3 from "assets/img/admindashb-3.jpg";
// import image3 from "assets/img/ghd_banner_3.png";
// import image4 from "assets/img/.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                        <Card carousel>
                            <Carousel {...settings}>
                                <div>
                                    <img src={image1} alt="First slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <h4>
                                            {/* <LocationOn className="slick-icons" /> */}
                                            {/* Yellowstone National Park, United States */}
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={image2}
                                        alt="Second slide"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                        <h4>
                                            {/* <LocationOn className="slick-icons" />
                      Somewhere Beyond, United States */}
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <img src={image3} alt="Third slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <h4>
                                            {/* <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States */}
                                        </h4>
                                    </div>
                                </div>
                            </Carousel>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
