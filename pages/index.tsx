import React from "react";
import type {NextPage} from 'next'
import Head from 'next/head'
import {MainModel} from "../components/models/MainModel";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jakub Śpiewak Blog</title>
                <meta
                  name="description"
                  content="Jakub Śpiewak"
                />
                <link
                  rel={"preload"}
                  ref={"/fonts/Magiel-Black.ttf"}
                  type={"font"}
                  crossOrigin={""}
                />
            </Head>
            <MainModel/>
        </>
    )
}

export default Home
