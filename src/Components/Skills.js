import {
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Stack,
  Box,
  Center,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { FaReact, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Skill = ({ skillName, skillIcon }) => {
  return (
    <Box
      p={6}
      minW="140px"
      borderRadius={5}
      bgColor={useColorModeValue("#E8E2DC", "#404040")}
    >
      <Text textAlign="center" fontSize="xl">
        <Center>{skillIcon}</Center>
        {skillName}
      </Text>
    </Box>
  );
};

const Skills = () => {
  return (
    <Center>
      <VStack maxW="768px">
        <Container centerContent>
          <Heading variant="section-title">Mes compétences</Heading>
        </Container>
        <Wrap justify="center">
          <WrapItem>
            <Skill skillName="React.js" skillIcon={<FaReact />} />
          </WrapItem>
          <WrapItem>
            <Skill skillName="JavaScript" skillIcon={<SiJavascript />} />
          </WrapItem>
          <WrapItem>
            <Skill skillName="Express.js" skillIcon={<SiExpress />} />
          </WrapItem>
          <WrapItem>
            <Skill skillName="HTML 5" skillIcon={<FaHtml5 />} />
          </WrapItem>
          <WrapItem>
            <Skill skillName="CSS 3" skillIcon={<FaCss3Alt />} />
          </WrapItem>
          <WrapItem>
            <Skill skillName="Java" skillIcon={<FaJava />} />
          </WrapItem>
          <WrapItem>
            <Skill skillName="MySQL" skillIcon={<GrMysql />} />
          </WrapItem>
          <WrapItem>
            <Skill skillName="MongoDB" skillIcon={<SiMongodb />} />
          </WrapItem>
        </Wrap>
      </VStack>
    </Center>
  );
};

export default Skills;
