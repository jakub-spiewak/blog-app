import React from "react";

import styles from "./MainScreen.module.css"
import gradientStyles from "../../css/GradientText.module.css"
// import {BsGithub, BsLinkedin} from "react-icons/bs";
import {Link} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {RiGithubFill, RiLinkedinBoxFill, RiMailSendFill} from "react-icons/ri";

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
            <IconFromProps aria-label={aria} color={ICON_COLOR} size={32}/>
        </Link>
    )
}

export const MainScreen = () => {
    return (
        <main className={styles.container}>
            <section className={styles.content}>
                <h1 className={`${styles.title} ${gradientStyles.gradient}`}>Jakub Śpiewak</h1>
                <h2 className={`${styles.subTitle} `}>Fullstack developer</h2>
                <section className={styles.subTitleContainer}>
                    <section className={styles.iconGroup}>
                        <IconLink
                            icon={RiGithubFill}
                            aria={"github_icon"}
                            link={"https://github.com/jakub-spiewak"}
                        />
                        <IconLink
                            icon={RiLinkedinBoxFill}
                            aria={"linkedin_icon"}
                            link={"https://www.linkedin.com/in/jakub-%C5%9Bpiewak-856a16169/"}
                        />
                        <IconLink
                            icon={RiMailSendFill}
                            aria={"instagram_icon"}
                            link={"mailto:priv@jakubspiewak.com"}
                        />
                        <Link
                            color={ICON_COLOR}
                            fontSize={"1.5em"}
                            style={{fontWeight: "bold"}}
                            // fontFamily={"Magiel-Black"}
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