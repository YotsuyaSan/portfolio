import { extendTheme } from "@chakra-ui/react";

const fonts = {
    fonts: ""
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 25,
                textUnderlineOffset: 6,
                textDecorationColor: '#56d3e3',
                textDecorationThickness: 3,
                marginTop: 4,
                marginBottom: 4
            }
        }
    }
}

const theme = extendTheme({ fonts, components })

export default theme