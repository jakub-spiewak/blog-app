import React from "react";
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme()

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*@ts-ignore*/}
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
