import React from "react";
import type {NextPage} from 'next'
import Head from 'next/head'
import {Scene} from "../components/scene/Scene";
import {MainScreen} from "../screens/main/MainScreen";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jakub Śpiewak Blog</title>
                <meta name="description"
                      content="Blog of Jakub Śpiewak"/>
                {/*<link rel="icon" href="/favicon.ico"/>*/}
                <link
                    rel={"preload"}
                    href={"/fonts/Magiel-Black.ttf"}
                    as={"font"}
                    crossOrigin={""}
                />
            </Head>
            <Scene/>
            <MainScreen/>
        </>
    )
}

export default Home
