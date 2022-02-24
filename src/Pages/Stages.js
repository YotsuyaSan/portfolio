import { Box, Flex, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import akao from '../assets/akao-life.png'

const Stages = () => {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Box maxW="15%">
        <Link href='http://www.akaolife.fr/'>
          <Image src={akao}/>
          <Text>
            Akaolife propose une solution fullweb, souple et personnalisable, répondant aux principales problématiques d'optimisation et de rationalisation de vos process internes.
          </Text>
          <Text> 
            Akaolife vous permet d'optimiser la gestion des flux d'informations et de gagner ainsi, en temps, en efficacité, en organisation. 
          </Text>
        </Link>
        </Box>
      </Flex>
    </VStack>
  )
}

export default Stages