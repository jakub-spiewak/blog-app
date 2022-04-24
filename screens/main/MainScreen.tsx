import React from "react";

import styles from "./MainScreen.module.css"
import gradientStyles from "../../css/GradientText.module.css"
import {Box, Center, Container, Divider} from "@chakra-ui/react";

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
                <Box>
                    <h1 className={`${styles.title} ${gradientStyles.gradient}`}>Jakub Śpiewak</h1>
                    <h2 className={`${styles.subTitle} ${gradientStyles.gradient}`}>Fullstack developer</h2>
                </Box>
            </Center>
            <Box className={styles.section}/>
            <Center
              as={"section"}
              className={`${styles.section} ${gradientStyles.background}`}
            >
                <Container className={styles.aboutMe}>
                    <h2 className={`${styles.aboutMeTitle} ${gradientStyles.gradient}`}>About me</h2>
                    <p>
                        I&apos;m a fullstack developer with passion for what I do! I&apos;ve started my programming
                        adventure
                        at University. I was a student of Automatic Control and Robotics which is closely related to
                        programming. I quickly discovered that I am much more comfortable with programming software
                        than industrial robots.
                    </p>
                    <Divider m={4}/>
                    <p>
                        I cooperate with CodeLab on a daily basis, but when I finish my duties I start to develop my own
                        projects.
                        I deliver projects for my private clients, spend time expanding my current knowledge and trying
                        new technologies and trends.
                    </p>
                    <Divider m={4}/>
                    <p>
                        I like the role of a fullstack dev because I have an impact on the software, both on what the
                        user sees
                        and doesn&apos;t see.
                    </p>
                </Container>
            </Center>
        </Box>
    )
}