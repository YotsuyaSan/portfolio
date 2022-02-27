import {
  Box,
  useMediaQuery,
  useColorModeValue,
  Image,
  Center,
  LinkBox,
  LinkOverlay,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const Stage = ({ logo, description, url }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <LinkBox>
      <LinkOverlay href={url} />
      <Box
        p={6}
        minW={isMobile ? "350px" : "600px"}
        maxW={"350px"}
        minH="300px"
        borderRadius={5}
        bgColor={useColorModeValue("#FFFFFF", "#404040")}
      >
        <Center>
          <Image maxH="100px" src={logo} />
        </Center>
        <Box textAlign="center" mt={5}>
          {description}
        </Box>
      </Box>
    </LinkBox>
  );
};

export default Stage;
