import React from "react";

import styles from "./MainScreen.module.css"
import gradientStyles from "../../css/GradientText.module.css"
import {Box, Center, Spacer} from "@chakra-ui/react";

export const MainScreen = () => {
    return (
        <Center
            flexDirection={"column"}
            height={"100vh"}
        >
            <Spacer/>
            <Box>
                <h1 className={`${styles.title} ${gradientStyles.gradient}`}>Jakub Śpiewak</h1>
                <h2 className={`${styles.subTitle} ${gradientStyles.gradient}`}>Fullstack developer</h2>
            </Box>
            <Spacer/>
        </Center>
    )
}