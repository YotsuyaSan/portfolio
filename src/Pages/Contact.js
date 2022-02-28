import {
  Container,
  Flex,
  Heading,
  VStack,
  Box,
  Link,
  Button,
  Center,
  useColorModeValue,
  Wrap,
  WrapItem,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <VStack p={5}>
      <Container maxW="100%">
        <Heading align="center" variant="section-title">
          Contact
        </Heading>
        <Center>
          <Box
            p={6}
            minW={isMobile ? "350px" : "600px"}
            maxW="768px"
            minH="100px"
            borderRadius={5}
            bgColor={useColorModeValue("#E8E2DC", "#404040")}
          >
            <Wrap justify="center">
              <WrapItem>
                <Link href="https://github.com/YotsuyaSan">
                  <Button
                    minW={isMobile ? "300px" : "600px"}
                    leftIcon={<AiFillGithub />}
                    bgColor={useColorModeValue("#F7F4F0")}
                  >
                    @YotsuyaSan
                  </Button>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href="https://www.linkedin.com/in/zaccaria-maldrie-6623811b9/">
                  <Button
                    minW={isMobile ? "300px" : "600px"}
                    leftIcon={<AiFillLinkedin />}
                    bgColor={useColorModeValue("#F7F4F0")}
                  >
                    Maldrie Zaccaria
                  </Button>
                </Link>
              </WrapItem>
              <WrapItem>
                <Button
                  minW={isMobile ? "300px" : "600px"}
                  leftIcon={<GrMail />}
                  bgColor={useColorModeValue("#F7F4F0")}
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "zaccaria.maldrie@outlook.com"
                    )
                  }
                >
                  zaccaria.maldrie@outlook.com
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  minW={isMobile ? "300px" : "600px"}
                  leftIcon={<AiFillPhone />}
                  bgColor={useColorModeValue("#F7F4F0")}
                  onClick={() =>
                    navigator.clipboard.writeText("07 87 76 48 65")
                  }
                >
                  07 87 76 48 65
                </Button>
              </WrapItem>
            </Wrap>
          </Box>
        </Center>
      </Container>
    </VStack>
  );
};

export default Contact;
