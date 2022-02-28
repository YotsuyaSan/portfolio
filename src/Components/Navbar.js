import {
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Spacer,
  Stack,
  Text,
  useColorMode,
  VStack,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import React from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // eslint-disable-next-line eqeqeq
  const isDark = colorMode == "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Text ml={8} fontSize="xl" fontWeight="semibold">
          Portfolio
        </Text>

        <Spacer />

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          mr={5}
          align="center"
          justify="space-between"
          size="md"
          spacing={5}
        >
          <Link href="/">Accueil</Link>
          <Link href="/stages">Stages</Link>
          <Link href="/portefeuille">Portefeuille de compétences</Link>
          <Link href="/veille">Veille technologique</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
        <IconButton
          mr={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
        <Box display={{ base: "inline-block", md: "none" }}>
          <Menu>
            <MenuButton as={IconButton} icon={<FiMenu />} />
            <MenuList bgColor={useColorModeValue("#E8E2DC", "#404040")}>
              <Link href="/" passhref>
                <MenuItem as={Link}>Accueil</MenuItem>
              </Link>
              <Link href="/stages" passhref>
                <MenuItem as={Link}>Stages</MenuItem>
              </Link>
              <Link href="/portefeuille" passhref>
                <MenuItem as={Link}>Portefeuille de compétences</MenuItem>
              </Link>
              <Link href="/veille" passhref>
                <MenuItem as={Link}>Veille technologique</MenuItem>
              </Link>
              <Link href="/contact" passhref>
                <MenuItem as={Link}>Contact</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </VStack>
  );
};

export default Navbar;
