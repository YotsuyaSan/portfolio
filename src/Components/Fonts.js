import { Global } from "@emotion/react"

const Fonts = () => (
    <Global
    
        styles={`
            @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
            @font-face {
                font-family: 'M PLUS Rounded 1c', sans-serif;
                src: url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap')
            }
        `}
    />
)
export default Fonts