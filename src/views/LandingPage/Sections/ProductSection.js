import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nossa Missão</h2>
          <h5 className={classes.description}>
            Desenvolver softwares inteligentes para facilitar a vida das
            pessoas. Ser referência no desenvolvimento de software para o
            varejo, proporcionando o crescimento e bem-estar dos clientes,
            colaboradores e comunidade. Soluções de software de gestão para
            empresas que necessitam automatizar ou melhorar seus controles
            internos, tendo a tecnologia como aliados.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Proposta"
              description="A proposta é desenvolver soluções para diversos segmentos, visando sempre a satisfação do cliente."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Confiança"
              description="Equipe qualificada garantindo assim a confiança em nossos aplicativos, ferramentas e serviços."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tecnologia"
              description="Especialista em software sob medida. Entregamos soluções com tecnologias de qualidade."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
