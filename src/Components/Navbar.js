import {
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  Stack,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // eslint-disable-next-line eqeqeq
  const isDark = colorMode == "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold">
          Portfolio
        </Heading>

        <Spacer />

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          mr={8}
        >
          <Link href="/">Accueil</Link>
          <Link href="/stages">Stages</Link>
          <Link href="/veille">Veille technologique</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
        <IconButton
          mr={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </VStack>
  );
};

export default Navbar;
