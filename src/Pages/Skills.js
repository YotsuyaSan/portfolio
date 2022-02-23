import { CircularProgress, CircularProgressLabel, Container, Flex, Heading, Text, VStack, Stack } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
  return (
    <VStack p={5}>
      <Flex w="100%" bg="black">
        <Container bg="red" maxW="container.lg" wrap="wrap">
          <Heading variant="section-title">Mes compétences</Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            spacing={6}
            flexgrow={1}
          >
            <Container>
              <CircularProgress value={70} size="120px">
                <CircularProgressLabel>70%</CircularProgressLabel>
              </CircularProgress>
              <Text>Node.js & <br /> Express.js</Text>
            </Container>
            <Container>
              <CircularProgress value={70} size="120px">
                <CircularProgressLabel>70%</CircularProgressLabel>
              </CircularProgress>
              <Text>React.js</Text>
            </Container>
            <Container>
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