import { Container, Flex, Heading, Text, VStack, Stack, Box, Center, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaReact, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiExpress, SiJavascript, SiMongodb } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr';

const Skill = ({ skillName, skillIcon }) => {
  return (
    <Box p={5} minW='130px' borderRadius={5} bgColor={useColorModeValue('gray.100', 'gray.700')}>
      <Text textAlign='center' fontSize='xl'>
        <Center>
          {skillIcon}
        </Center>
        {skillName}
      </Text>
    </Box>
  )
}

const Skills = () => {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Container centerContent>
          <Heading variant="section-title">Mes compétences</Heading>
          <Stack
            justifyContent='space-between'
            direction={['column', 'row']}
            spacing={6}
            flexGrow={1}
          >
            <Skill
              skillName='React.js'
              skillIcon={<FaReact />}
            />

            <Skill
              skillName='JavaScript'
              skillIcon={<SiJavascript />}
            />

            <Skill
              skillName='Express.js'
              skillIcon={<SiExpress />}
            />

            <Skill
              skillName='HTML 5'
              skillIcon={<FaHtml5 />}
            />

            <Skill
              skillName='CSS 3'
              skillIcon={<FaCss3Alt />}
            />

            <Skill
              skillName='Java'
              skillIcon={<FaJava />}
            />

            <Skill
              skillName='MySQL'
              skillIcon={<GrMysql />}
            />

            <Skill
              skillName='MongoDB'
              skillIcon={<SiMongodb />}
            />

          </Stack>
        </Container>
      </Flex>
    </VStack>
  )
}

export default Skills