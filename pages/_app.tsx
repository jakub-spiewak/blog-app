import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import CSSReset from "@chakra-ui/css-reset/src/css-reset";
import {ColorModeScript} from "@chakra-ui/color-mode/src/color-mode-script";

const theme = extendTheme()

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
