import React from "react";

//GLOBAL RESPONSIVE FUNCTION
import Global from "./styles/global";


//COMPONENTS

//import { Rodape } from "./components/footer";
// import { ButtonAppBar } from "./components/menu/menu-top-bar.js"
//import { SimpleMenu } from "./components/menu/menu.js";
//import { PrimarySearchAppBar } from "./components/menu/menu-bar.js";
//import { PersistentDrawerLeft } from "./components/menu/menu-page.js";
//import { Footer } from "./components/footer/footer-bar.js";
//import { ThemeSwitcher } from "./components/navbar/navbar";

import { Rodape } from "./components/footer";


//PAGES

//import { AlignItemsList } from "./pages/login/login.js";

const App = () => (
  
  <div>
    <Global />
    {/* <SimpleMenu /> */}
    {/* <PrimarySearchAppBar /> */}
    {/* <PersistentDrawerLeft /> */}

    {/* present menu */}
    {/* <ButtonAppBar />  */}

    {/* <h1>Aqui landing page ghd sites agencia web</h1> */}


    

    {/*
    <Link to="/hello">
    <button>Hello</button>
    </Link>
    */}

    {/* <AlignItemsList /> */}

    {/* <StickyFooter /> */}

    {/* <Footer /> */}

    {/* <Routes /> */}

    <Rodape /> 

    
  </div>
);

export default App;


/*

DOCs:

https://dev.to/carloscne/criando-paginas-responsivas-e-adaptativas-com-react-e-styled-components-1gje


*/