import {
  Container,
  Flex,
  Heading,
  VStack,
  Box,
  Link,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Container maxW="container.lg" wrap="wrap">
          <Heading variant="section-title">Contact</Heading>
          <Box
            p={5}
            minW="130px"
            borderRadius={5}
            bgColor={useColorModeValue("gray.100", "gray.700")}
          >
            <Stack direction="column">
              <Link href="https://github.com/YotsuyaSan">
                <Button leftIcon={<AiFillGithub />}>@YotsuyaSan</Button>
              </Link>
              <Link href="https://www.linkedin.com/in/zaccaria-maldrie-6623811b9/">
                <Button leftIcon={<AiFillLinkedin />}>Maldrie Zaccaria</Button>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Flex>
    </VStack>
  );
};

export default Contact;
