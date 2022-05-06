import React from "react";

import styles from "./MainScreen.module.css"
import gradientStyles from "../../css/GradientText.module.css"
import {BsGithub, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

export const MainScreen = () => {
    return (
        <main className={styles.container}>
            <section className={styles.content}>
                <h1 className={`${styles.title} ${gradientStyles.gradient}`}>Jakub Śpiewak</h1>
                <section style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "space-between",
                    marginTop: "1rem"
                }}>
                    <h2 className={`${styles.subTitle} ${gradientStyles.gradient}`}>Fullstack developer</h2>
                    <section
                        style={{
                            display: "flex",
                            gap: "1rem"
                        }}
                        className={gradientStyles.gradient}
                    >
                        <BsGithub size={"2rem"} className={gradientStyles.gradient}/>
                        <BsLinkedin size={"2rem"} className={gradientStyles.gradient}/>
                        <BsTwitter size={"2rem"} className={gradientStyles.gradient}/>
                        <BsInstagram size={"2rem"} className={gradientStyles.gradient}/>
                    </section>
                </section>
            </section>
        </main>
    )
}