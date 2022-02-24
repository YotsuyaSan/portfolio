import { CircularProgress, CircularProgressLabel, Container, Flex, Heading, Text, VStack, Stack, Spacer } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Container maxW="container.lg" wrap="wrap">
          <Heading variant="section-title">Mes compétences</Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={6}
            flexgrow={1}
          >
            <Container p={4} textAlign='center'>
              <CircularProgress value={70} size="120px">
                <CircularProgressLabel>70%</CircularProgressLabel>
              </CircularProgress>
              <Text>Node.js & Express.js</Text>
            </Container>
            <Spacer/>
            <Container p={4} textAlign="center">
              <CircularProgress value={70} size="120px">
                <CircularProgressLabel>70%</CircularProgressLabel>
              </CircularProgress>
              <Text>React.js</Text>
            </Container>
            <Spacer/>
            <Container p={4} textAlign="center">
              <CircularProgress value={70} size="120px">
                <CircularProgressLabel>70%</CircularProgressLabel>
              </CircularProgress>
              <Text>Java</Text>
            </Container>
          </Stack>
        </Container>
      </Flex>
    </VStack>
  )
}

export default Skills