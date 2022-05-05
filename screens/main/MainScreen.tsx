import React from "react";

import styles from "./MainScreen.module.css"
import gradientStyles from "../../css/GradientText.module.css"
import {Box, Center} from "@chakra-ui/react";

export const MainScreen = () => {
    return (
        <Box
            as={"main"}
            className={styles.container}
            id={"landingPageContainer"}
        >
            <Center
                as={"section"}
                className={styles.section}
            >
                <h1 className={`${styles.title} ${gradientStyles.gradient}`}>Jakub Śpiewak</h1>
                <h2 className={`${styles.subTitle} ${gradientStyles.gradient}`}>Fullstack developer</h2>
            </Center>
        </Box>
    )
}