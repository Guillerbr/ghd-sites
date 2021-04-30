import React, { Component, Fragment } from "react";
import Dimensions from "react-dimensions";
import { withRouter } from "react-router-dom";
import { ModalRoute } from "react-router-modal";
import MapGL from "react-map-gl";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

//google maps
import { Loader } from "google-maps";

const googleMapsLoader = new Loader(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

//const useStyles = makeStyles(styles);



console.log(googleMapsLoader);

// useEffect(() => {

//     (async () => {
//         await googleMapsLoader.load();

//     })();
// }, [])

//import api from "../../services/api";
//import { logout } from "../../services/auth";

// import Properties from "./components/Properties";
// import Button from "./components/Button";

// import AddProperty from "../AddProperty";
// import Property from "../Property";

//import { Container, ButtonContainer, PointReference } from "./styles";


//class Map extends Component {
export default function Map(props) {

    //const mapRef = useRef < google.maps.Map > ();

    return (
        <h1>Maps</h1>


    );

}



