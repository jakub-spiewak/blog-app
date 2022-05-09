import React from "react";

import styles from "./MainScreen.module.css"
import gradientStyles from "../../css/GradientText.module.css"
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import {Link} from "@chakra-ui/react";
import {IconType} from "react-icons";

const ICON_COLOR = "#c09761"

interface IconProps {
    icon: IconType,
    aria: string,
    link?: string
}

const IconLink = ({icon, aria, link}: IconProps): JSX.Element => {
    const IconFromProps = icon
    return (
        <Link marginRight={"1rem"} href={link}>
            <IconFromProps color={ICON_COLOR} size={"2rem"}/>
        </Link>
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
                        <IconLink
                            icon={BsGithub}
                            aria={"github_icon"}
                            link={"https://github.com/jakub-spiewak"}
                        />
                        <IconLink
                            icon={BsLinkedin}
                            aria={"linkedin_icon"}
                            link={"https://www.linkedin.com/in/jakub-%C5%9Bpiewak-856a16169/"}
                        />
                        <IconLink
                            icon={BsInstagram}
                            aria={"instagram_icon"}
                            link={"https://www.instagram.com/jakub.spiewak/"}
                        />
                        <Link
                            color={ICON_COLOR}
                            fontSize={"1.5em"}
                            fontFamily={"Magiel-Black"}
                            variant={"outline"}
                        >
                            Blog
                        </Link>
                    </section>
                </section>
            </section>
        </main>
    )
}