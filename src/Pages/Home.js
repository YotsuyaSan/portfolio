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
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat arcu at maximus consectetur. Proin tincidunt elementum diam eu volutpat. Nam malesuada, justo in gravida laoreet, purus ipsum auctor ipsum, sit amet mattis velit libero a purus. Sed ultrices urna nulla, in porttitor neque aliquam quis. Etiam ullamcorper faucibus lectus, et condimentum nunc gravida non. Pellentesque facilisis dui turpis, non tincidunt augue vehicula et. Nulla luctus auctor metus, ut pellentesque urna. Pellentesque a lectus vitae nisi lobortis varius sit amet id purus. Etiam ante neque, aliquam ornare semper a, semper efficitur quam. In tempor ac nisl et fermentum. In semper, ante at fermentum faucibus, turpis velit commodo eros, eget vehicula lorem felis quis nibh. Cras leo ligula, volutpat nec imperdiet id, laoreet id diam. </Text>
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