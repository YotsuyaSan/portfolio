import {
  Box,
  Center,
  useMediaQuery,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Document, Page } from "react-pdf";
import portefeuille from "../assets/portefeuille.pdf";

const Competences = (props) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <VStack p={5}>
      <Box
        p={6}
        minW={isMobile ? "350px" : "600px"}
        minH="100px"
        borderRadius={5}
        bgColor={useColorModeValue("#E8E2DC", "#404040")}
      >
        <Center>
          <Document
            file={portefeuille}
            options={{ workerSrc: "/pdf.worker.js" }}
          >
            <Page scale={1.5} pageNumber={1} />
          </Document>
        </Center>
      </Box>
    </VStack>
  );
};

export default Competences;
