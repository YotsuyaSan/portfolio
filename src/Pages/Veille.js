import {
  Box,
  Container,
  Heading,
  VStack,
  useMediaQuery,
  useColorModeValue,
  useColorMode,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

const Block = ({ text }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      p={6}
      /*       minW={isMobile ? "350px" : "600px"}
      maxW="768px"
      minH="100px"
      borderRadius={5}
      bgColor={useColorModeValue("#E8E2DC", "#404040")} */
    >
      {text}
    </Box>
  );
};

const Veille = () => {
  return (
    <VStack p={5}>
      <Container maxW="768px">
        <Heading align="center" variant="section-title">
          Veille technologique
        </Heading>
        <Wrap justify="center">
          <WrapItem>
            <Block
              text={
                "Ma veille technologique portera sur le développement Web FullStack MERN (MongoDB, Express.Js, React.Js, Node.Js). Ce portfolio a été réalisé avec React.Js, les 4 paragraphes ci dessous présentent brièvement les differentes technologies MERN."
              }
            />
          </WrapItem>
          <WrapItem>
            <Block
              text={
                "Mongoose est une bibliothèque de programmation JavaScript orientée objet qui crée une connexion entre MongoDB et le framework d'application Web Express."
              }
            />
          </WrapItem>
          <WrapItem>
            <Block
              text={
                "Express.js est un framework pour construire des applications web basées sur Node.js. C'est de fait le framework standard pour le développement de serveur en Node.js."
              }
            />
          </WrapItem>
          <WrapItem>
            <Block
              text={
                "React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état."
              }
            />
          </WrapItem>
          <WrapItem>
            <Block
              text={
                "Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau évènementielles hautement concurrentes qui doivent pouvoir monter en charge. Elle utilise la machine virtuelle V8, la librairie libuv pour sa boucle d'évènements, et implémente sous licence MIT les spécifications CommonJS."
              }
            />
          </WrapItem>
        </Wrap>
      </Container>
    </VStack>
  );
};

export default Veille;
