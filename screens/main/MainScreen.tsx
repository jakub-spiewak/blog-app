import React from "react";

import styles from "./MainScreen.module.css"
import gradientStyles from "../../css/GradientText.module.css"
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import {Button, IconButton} from "@chakra-ui/react";
import {IconType} from "react-icons";

const ICON_COLOR = "#9E907B"

interface IconProps {
    icon: IconType,
    aria: string
}

const Icon = ({icon, aria}: IconProps): JSX.Element => {
    const IconFromProps = icon
    return (
        <IconButton
            aria-label={aria}
            icon={<IconFromProps color={ICON_COLOR} size={"2rem"}/>}
            variant={"ghost"}
        />
    )
}

export const MainScreen = () => {
    return (
        <main className={styles.container}>
            <section className={styles.content}>
                <h1 className={`${styles.title} ${gradientStyles.gradient}`}>Jakub Śpiewak</h1>
                <h2 className={`${styles.subTitle} ${gradientStyles.gradient}`}>Fullstack developer</h2>
                <section className={styles.subTitleContainer}>
                    <section className={styles.iconGroup}>
                        <Icon icon={BsGithub} aria={"github_icon"}/>
                        <Icon icon={BsLinkedin} aria={"linkedin_icon"}/>
                        {/*<Icon icon={BsTwitter} aria={"twitter_icon"}/>*/}
                        <Icon icon={BsInstagram} aria={"instagram_icon"}/>
                        <Button color={ICON_COLOR} colorScheme={""} variant={"outline"}>BLOG</Button>
                    </section>
                </section>
            </section>
        </main>
    )
}