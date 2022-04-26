import React from "react";

import styles from "./MainScreen.module.css"
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
            />
        </Box>
    )
}