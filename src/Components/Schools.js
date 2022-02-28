import {
  Box,
  Badge,
  Heading,
  useColorModeValue,
  VStack,
  Container,
  Wrap,
  useMediaQuery,
  WrapItem,
  useColorMode,
} from "@chakra-ui/react";

import React from "react";

const School = ({ name, formation, dates }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  // eslint-disable-next-line eqeqeq
  const isDark = colorMode == "dark";
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      margin="auto"
      p={6}
      minW={isMobile ? "350px" : "768px"}
      h="150px"
      borderRadius={5}
      bgColor={useColorModeValue("#E8E2DC", "#404040")}
    >
      <Badge
        borderRadius="full"
        px="2"
        colorScheme={isDark ? "teal" : "orange"}
      >
        {dates}
      </Badge>

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
        {name}
      </Box>

      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
      >
        {formation}
      </Box>
    </Box>
  );
};

const Schools = () => {
  return (
    <VStack p={5}>
      <Container centerContent>
        <Heading variant="section-title">Parcours scolaire</Heading>
      </Container>

      <Wrap justify="center">
        <WrapItem>
          <School
            name="Lycée professionnel St Luc Cambrai"
            formation="Bac professionnel Systèmes Numériques option Réseaux Informatiques et Systèmes Communiquants"
            dates="2017 - 2020"
          />
        </WrapItem>
        <WrapItem>
          <School
            name="Lycée Dampierre Valenciennes"
            formation="BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers"
            dates="2020 - Aujourd'hui"
          />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};

export default Schools;
