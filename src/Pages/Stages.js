import { Container, Heading, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import akao from "../assets/akao-life.png";
import hiolle from "../assets/hiolle.png";
import machine3d from "../assets/machines-3d.png";
import Stage from "../Components/Stage";

const Stages = () => {
  return (
    <VStack p={5}>
      <Container centerContent>
        <Heading variant="section-title">
          Entreprises m'ayant accueilli en stage
        </Heading>
      </Container>
      <Wrap justify="center">
        <WrapItem>
          <Stage
            logo={akao}
            description="
        Akaolife propose une solution fullweb, souple et personnalisable,
        répondant aux principales problématiques d'optimisation et de
        rationalisation de vos process internes.
        Akaolife vous permet d'optimiser la gestion des flux
        d'informations et de gagner ainsi, en temps, en efficacité, en
        organisation.
        "
            url="http://www.akaolife.fr/"
          />
        </WrapItem>
        <WrapItem>
          <Stage
            logo={hiolle}
            description="HIOLLE INDUSTRIES, Groupe industriel historiquement basé dans le Nord de la France, développe depuis 1976 de façon originale ses services à l’industrie. À la maintenance, métier historique du Groupe, sont venues s’ajouter de nombreuses autres activités industrielles liées au développement durable et au ferroviaire."
            url="https://www.hiolle-technologies.fr/fr/index.php"
          />
        </WrapItem>
        <WrapItem>
          <Stage
            logo={machine3d}
            description="Machines 3D est spécialisée dans la commercialisation d’imprimantes 3D, de Scanners 3D, ainsi que de consommables et accessoires d'imprimantes 3D à l'international."
            url="https://www.machines-3d.com/"
          />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};

export default Stages;
