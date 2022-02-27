import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#F7F4F0", "#282828")(props),
      color: mode("#3F3F3F", "#ffffff")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 25,
        marginTop: 4,
        marginBottom: 4,
      },
    },
  },
};

const theme = extendTheme({ styles, components });

export default theme;
