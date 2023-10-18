import * as React from "react"
import { Link } from 'react-router-dom';
import {
    svgTeal,
    svgGreen,
    svgRed,
    threeCircles,
    circle,
    socialMediaContainer,
    image,
} from "./social-media.module.css"
// import myFile from "./downloadLinks/resumeDraft.pdf";

//images
import email from './images/Email white.png';
import github from './images/github-logo.png';
import linkedin from './images/linkedin-hollow.png';

const SocialMedia = () => {
    const IMAGESIZE = 55;

    return (
        <>
            <div className={socialMediaContainer}>
                    <ul className={threeCircles}>
                        <li className={circle}>
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
                        <li className={circle}>
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
                        <li className={circle}>
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
                    </ul>
                <svg className={svgTeal} xmlns="http://www.w3.org/2000/svg" width="200" height="223" viewBox="0 0 200 223" fill="none">
                    <path d="M23.8923 75.9459C-14.7952 58.1273 -2.46678 0 40.127 0H106.051C157.937 0 200 42.0625 200 93.9493V110V132.838C200 182.633 159.633 223 109.838 223H40.3211C-2.04568 223 -14.5923 165.299 23.9491 147.706V147.706C54.6315 133.701 54.5269 90.0556 23.8923 75.9459V75.9459Z" fill="#80D9D9" />
                </svg>

                <svg className={svgGreen} xmlns="http://www.w3.org/2000/svg" width="250" height="223" viewBox="0 0 250 223" fill="none">
                    <path d="M26.7329 75.5092C-14.0718 60.6053 -3.83298 0 39.6083 0H149.027C204.793 0 250 45.2071 250 100.973V110V126.337C250 179.722 206.722 223 153.337 223H39.9827C-3.23056 223 -13.7854 162.832 26.8476 148.124C60.7359 135.856 60.5857 87.8739 26.7329 75.5092Z" fill="#7DD647" />
                </svg>

                <div className={svgRed}></div>
            </div>
        </>
    )
}

export default SocialMedia;