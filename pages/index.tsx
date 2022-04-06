import React from "react";
import type {NextPage} from 'next'
import Head from 'next/head'
import {Background} from "../components/Background";
import faker from "@faker-js/faker";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jakub Śpiewak Blog</title>
                <meta name="description" content="Blog of Jakub Śpiewak"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main style={{position: "relative"}}>
                <div style={{
                    position: "relative",
                    flexDirection: "column",
                    zIndex: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh"
                }}>
                    <h1 style={{color: "wheat", fontSize: "4em"}}>Jakub Śpiewak</h1>
                </div>
                <div style={{position: "absolute", top:0, left: 0, zIndex: -100}}>
                    <Background/>
                </div>
            </main>
    </>
    )
}

export default Home
