import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider, Spinner} from "@chakra-ui/react";
import CssReset from "@chakra-ui/css-reset/src/css-reset";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
