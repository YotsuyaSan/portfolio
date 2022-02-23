import React from 'react'
import { Heading, Text, VStack, Flex, Stack, Container, Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Container maxW="container.lg" wrap="wrap">
          <Stack>
            <Heading variant="section-title">À propos de moi</Heading>
            <Box p={4} borderWidth={2}>
              <Text></Text>
            </Box>
            <Heading variant="section-title">Parcours scolaire</Heading>
            <br />
            <Box p={4} borderWidth={2}>
              <Text>Lycée professionnel St Luc Cambrai</Text>
              <Text>Bac professionnel Systèmes Numériques option Réseaux Informatiques et Systèmes Communiquants</Text>
            </Box>
            <Box p={4} borderWidth={2}>
              <Text>Lycée Dampierre Valenciennes</Text>
              <Text>BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers</Text>
            </Box>
          </Stack>
        </Container>
      </Flex>
    </VStack>
  )
}

export default Home