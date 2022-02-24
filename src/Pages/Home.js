import React from 'react'
import { Heading, Text, VStack, Flex, Stack, Container, Box, useColorModeValue } from '@chakra-ui/react'
import Skills from '../Components/Skills'
import Schools from '../Components/Schools'

const Home = () => {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Container>
          <Stack>
            <Container centerContent>
              <Heading variant="section-title">À propos de moi</Heading>
              <Box p={6} w='600px' h='auto' borderRadius={5} bgColor={useColorModeValue('gray.100', 'gray.700')}>
                <Text>Je suis un Étudiant en troisième année de Licence Informatique spécialisation Développement / DevOps. En parallèle de mes études, je suis aussi Développeur Web Freelance depuis 2022. Mes missions principales sont la réalisation de site vitrine pour particulier ou entreprise ainsi que de site E-commerce.</Text>
              </Box>
            </Container>

            <Skills />

            <Schools />
          </Stack>
        </Container>
      </Flex>
    </VStack>
  )
}

export default Home