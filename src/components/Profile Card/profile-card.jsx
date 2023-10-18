import * as React from "react"
import {
    profileCardContainer,
    circle,
    profileBackgroundPic,
    backgroundPic,
    resume,
    highlight,
    dot,
    location,
    Name,
    title,
    profileStatus,
    profilePic
} from "./profile-card.module.css"
import background from './images/profile-background.png';
import profilePicture from './images/profile-pic.png';

const ProfileCard = () => {

    return (
        <>
            <section className={profileCardContainer} id="conBorder">
                <section id="#bubble" className={circle}>
                <img
                        className={profilePic}
                        alt="nametag"
                        src={profilePicture}
                        placeholder="blurred"
                        layout="fixed"
                    />
                </section>
                <div className={highlight}></div>
                <h2 className={Name}>KISHON ENNIS-NORMAN</h2>
                <h2 className={title}>Full-stack Developer</h2>
                <ul className={location}>
                    <li>
                        <plaintext>Oshawa</plaintext>
                    </li>
                    <li>
                        <div className={dot}></div>
                    </li>
                    <li>
                        <plaintext>ON</plaintext>
                    </li>
                    <li>
                        <div className={dot}></div>
                    </li>
                    <li>
                        <plaintext>Canada</plaintext>
                    </li>
                </ul>
                <p className={profileStatus}>Web developer & designer. <br /> Currently focused on e-commerce development</p>
                <div className={profileBackgroundPic} id="conBorder">
                    <img
                        className={backgroundPic}
                        alt="nametag"
                        src={background}
                        placeholder="blurred"
                        layout="fixed"
                    />
                </div>
            </section>
            <a href="src\components\Profile Card\Kishon Ennis-Norman's resume.pdf" download>
            <button className={resume}>RESUME</button>
            </a>
        </>
    )
}

export default ProfileCard;