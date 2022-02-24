import { Container, Flex, Heading, IconButton, Link, Spacer, Stack, useColorMode, VStack } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import React from 'react'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  // eslint-disable-next-line eqeqeq
  const isDark = colorMode == "dark"

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight="semibold">
          Portfolio
        </Heading>
        <Spacer />
        <Container maxW="container.sm" wrap="wrap" align="center" justify="space-between">
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            spacing={6}
            flexgrow={1}
            mt={{ base: 4, nmd: 0 }}
          >
            <Link href='/'>Accueil</Link>
            <Link href='/stages'>Stages</Link>
            <Link href='/veille'>Veille technologique</Link>
            <Link href='/contact'>Contact</Link>
            <IconButton icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} />
          </Stack>
        </Container>
      </Flex>
    </VStack>
  )
}

export default Navbar