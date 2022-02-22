import React from 'react'
import { Heading, Box, Text, VStack, Flex, Stack, Container } from '@chakra-ui/react'

const Section = ({ title, desc }) => {
  return (
    <Box p={5}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

const Home = () => {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Container maxW="container.lg" wrap="wrap">
          <Stack>
            <Heading as="h3" variant="section-title" fontSize="2xl">Diplômes et formations</Heading>
            <Text fontSize="lg">Lycée dampierre Valenciennes</Text>
            <Text>BTS Services Informatiques aux Organisations</Text>

            <Text>Lycée professionnel St Luc Cambrai</Text>
            <Text>Bac professionnel Systèmes Numériques option Réseaux Informatiques et Systèmes Communiquants</Text>
          </Stack>
        </Container>
      </Flex>
    </VStack>
  )
}

export default Home