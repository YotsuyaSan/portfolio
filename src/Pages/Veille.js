import {
  Box,
  Container,
  Heading,
  VStack,
  useMediaQuery,
  useColorModeValue,
  useColorMode,
  Badge,
  Wrap,
  WrapItem,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import React from "react";

const Block = ({ text }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      p={6}
      margin="auto"
      minW={isMobile ? "350px" : "768px"}
      borderRadius={5}
      bgColor={useColorModeValue("#E8E2DC", "#404040")}
    >
      {text}
    </Box>
  );
};

const Article = ({ date, title, link }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { colorMode } = useColorMode();
  // eslint-disable-next-line eqeqeq
  const isDark = colorMode == "dark";

  return (
    <LinkBox>
      <LinkOverlay href={link} />
      <Box
        margin="auto"
        p={6}
        minW={isMobile ? "350px" : "768px"}
        borderRadius={5}
        bgColor={useColorModeValue("#E8E2DC", "#404040")}
      >
        <Badge
          borderRadius="full"
          px="2"
          colorScheme={isDark ? "teal" : "orange"}
        >
          {date}
        </Badge>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {title}
        </Box>
      </Box>
    </LinkBox>
  );
};

const Tool = ({ title, desc, link }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { colorMode } = useColorMode();

  return (
    <LinkBox>
      <LinkOverlay href={link} />
      <Box
        margin="auto"
        p={6}
        minW={isMobile ? "350px" : "768px"}
        borderRadius={5}
        bgColor={useColorModeValue("#E8E2DC", "#404040")}
      >
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {title}
        </Box>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {desc}
        </Box>
      </Box>
    </LinkBox>
  );
};

const Veille = () => {
  return (
    <VStack p={5}>
      <Container maxW="768px">
        <Heading align="center" variant="section-title">
          Veille technologique
        </Heading>
        <Wrap spacing={5} justify="center">
          <WrapItem>
            <Block
              text={
                "Ma veille technologique portera sur le développement par intelligence artificielle. Les outils sur lesquels je vais me focaliser sont GitHub Copilot, Tabnine, et OpenAI Codex (utilisé pour alimenter GitHub Copilot."
              }
            />
          </WrapItem>

          <WrapItem>
            <Heading align="center" variant="section-title">
              Technologies
            </Heading>
          </WrapItem>

          <WrapItem>
            <Tool
              title="GitHub Copilot"
              desc="Avec GitHub Copilot, obtenez des suggestions pour des lignes entières ou des fonctions entières directement dans votre éditeur."
              link="https://copilot.github.com/"
            />
          </WrapItem>

          <WrapItem>
            <Tool
              title="OpenAI"
              desc="La mission d'OpenAI est de faire en sorte que l'intelligence artificielle profite à toute l'humanité. Une partie importante de cet effort consiste à entraîner les systèmes d'IA à faire ce que les humains veulent."
              link="https://openai.com/"
            />
          </WrapItem>

          <WrapItem>
            <Tool
              title="Tabnine"
              desc="L'assistant IA de Tabnine anticipe vos besoins de codage, fournissant des complétions de code pour vous et votre équipe de développement qui augmentent votre productivité."
              link="https://www.tabnine.com/"
            />
          </WrapItem>

          <WrapItem>
            <Heading align="center" variant="section-title">
              Articles
            </Heading>
          </WrapItem>

          <WrapItem>
            <Article
              date="28 septembre 2021"
              title="AI Can Write Code Like Humans—Bugs and All"
              link={
                "https://www.wired.com/story/ai-write-code-like-humans-bugs/"
              }
            />
          </WrapItem>
        </Wrap>
      </Container>
    </VStack>
  );
};

export default Veille;
