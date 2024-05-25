import * as React from "react"
import { Link } from 'react-router-dom';
import {
    container,
    profileCardContainer,
    circle,
    profileBackgroundPic,
    backgroundPic,
    resume,
    highlight,
    dot,
    location,
    nameAndTitleContianer,
    Name,
    title,
    profileStatus,
    profilePic,
    infoContainter,
    profileStatusBorder,
    infoAndContactContainer,
    threeCirclesContainer,
    threeCircles,
    circle1,
    circle2,
    circle3,
    image
} from "./profile-card.module.css"
import background from './images/profile-background.png';
import profilePicture from './images/profile-pic.png';

//images
import email from './images/Email white.png';
import github from './images/github-logo.png';
import linkedin from './images/linkedin-hollow.png';

const ProfileCard = () => {

    const IMAGESIZE = 30

    return (
        <>
            <div className={container}>
                <div className={profileBackgroundPic} >
                    <img
                    // id="conBorder"
                        className={backgroundPic}
                        alt="nametag"
                        src={background}
                        placeholder="blurred"
                        layout="fixed"
                    />
                    <section id="#bubble" className={circle}>
                        <img
                            className={profilePic}
                            alt="nametag"
                            src={profilePicture}
                            placeholder="blurred"
                            layout="fixed"
                        />
                    </section>
                </div>


                <section className={profileCardContainer} id="conBorder">
                    <div className={highlight}></div>
                    <div className={infoContainter}>
                    
                        <div className={infoAndContactContainer}>
                            <div className={nameAndTitleContianer}>
                                <h2 className={Name}>KISHON E-N</h2>
                                <h2 className={title}>Website Developer & Designer</h2>
                            </div>
                            <section className={threeCirclesContainer} id="borderAndBackground" >
                                <ul className={threeCircles}>
                                    <li className={circle1}>
                                        <Link to="mailto: kishonennis-norman@hotmail.com">
                                            <img className={image}
                                                id="slider-1"
                                                alt="Star"
                                                src={email}
                                                placeholder="blurred"
                                                layout="fixed"
                                                width={IMAGESIZE}
                                                height={IMAGESIZE} />
                                        </Link>
                                    </li>
                                    <li className={circle2}>
                                        <Link target="_blank" to="https://www.linkedin.com/in/kishon-ennis-norman-861b05194/">
                                            <img className={image}
                                                id="slider-1"
                                                alt="Star"
                                                src={linkedin}
                                                placeholder="blurred"
                                                layout="fixed"
                                                width={IMAGESIZE}
                                                height={IMAGESIZE} />
                                        </Link>
                                    </li>
                                    <li className={circle3}>
                                        <Link target="_blank" to="https://github.com/Crystallshard">
                                            <img className={image}
                                                id="slider-1"
                                                alt="Star"
                                                src={github}
                                                placeholder="blurred"
                                                layout="fixed"
                                                width={IMAGESIZE}
                                                height={IMAGESIZE} />
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className={profileStatusBorder} id="conBorder">
                            <p className={profileStatus} id="textBackground">Clean, funtional, interactive design. <br /> Currently focused on e-commerce development</p>

                        </div>
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
                    </div>
                </section> 
            </div>
        </>
    )
}

export default ProfileCard;