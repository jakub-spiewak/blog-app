import React from "react";

import styles from "./MainScreen.module.css"
import {Box, Center, Container, Spacer} from "@chakra-ui/react";

export const MainScreen = () => {
    return (
        // <Container size={"xl"}>
            <Center
                flexDirection={"column"}
                height={"100vh"}
            >
                {/*<Box>hej</Box>*/}
                <Spacer/>
                <Box>
                    <h1 className={`${styles.title} ${styles.gradientText}`}>Jakub Śpiewak</h1>
                    <h2 className={`${styles.subTitle} ${styles.gradientText}`}>Fullstack developer</h2>
                </Box>
                <Spacer/>
                {/*<Box>Hej</Box>*/}
            </Center>
        // </Container>
    )
}