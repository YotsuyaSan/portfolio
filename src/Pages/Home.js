import React from "react";
import {
  Heading,
  Text,
  VStack,
  useMediaQuery,
  Stack,
  Container,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Skills from "../Components/Skills";
import Schools from "../Components/Schools";

const Home = () => {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <VStack p={5}>
      <Container>
        <Stack>
          <Container centerContent>
            <Heading variant="section-title">À propos de moi</Heading>
            <Box
              p={6}
              minW={isMobile ? "350px" : "600px"}
              h="auto"
              borderRadius={5}
              bgColor={useColorModeValue("gray.100", "gray.700")}
            >
              <Text>
                Je suis un Étudiant en deuxième année de BTS SIO SLAM. Je suis
                un développeur FullStack
              </Text>
            </Box>
          </Container>

          <Skills />

          <Schools />
        </Stack>
      </Container>
    </VStack>
  );
};

export default Home;
