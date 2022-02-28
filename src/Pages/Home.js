import React from "react";
import {
  Heading,
  Text,
  VStack,
  useMediaQuery,
  Container,
  Box,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Skills from "../Components/Skills";
import Schools from "../Components/Schools";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <VStack p={5}>
      <Container maxW="100%">
        <Container centerContent>
          <Heading variant="section-title">À propos de moi</Heading>
        </Container>
        <Wrap justify="center">
          <WrapItem>
            <Box
              p={6}
              minW={isMobile ? "350px" : "600px"}
              maxW="768px"
              minH="100px"
              borderRadius={5}
              bgColor={useColorModeValue("#E8E2DC", "#404040")}
            >
              <Text>
                Bonjour, je m'appelle Zaccaria Maldrie. Passionné par le domaine
                de l'informatique je suis actuellement en deuxième année de BTS
                SIO option SLAM pour faire de cette passion une profession. Je
                développe actuellement mes compétences web en suivant des cours
                sur le développement FullStack MERN (MongoDB, Express.Js,
                React.Js, Node.Js)
              </Text>
            </Box>
          </WrapItem>
        </Wrap>

        <Skills />

        <Schools />
      </Container>
    </VStack>
  );
};

export default Home;
