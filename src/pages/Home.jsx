import ProfileCard from "../components/Profile Card/profile-card"
import SocialMedia from "../components/Social Media/social-media"
import ImageSlider from "../components/Image Slider/image-slider"
import NavBar from "../components/Navbar/navbar"

import {
    homeBody,
    displayArea,
    areaSeperater,
    resume,
    resumeText,
    image,
} from "./home.module.css"

/* images */
import resumeIcon from 'D:/Portfolio/portfolio/src/pages/images/resumeIcon.png'

/* pdf */
import Pdf from 'D:/Portfolio/portfolio/src/pages/Kishon-Ennis-Norman-resume.pdf';


export const Home = () => {
    const IMAGESIZE = 30;

    return (
        <>
            <body className={homeBody}>
                <NavBar />
                <div className={displayArea}>
                {/* <h5>LAST UPDATED 2024-05-04</h5> */}
                    <div className={areaSeperater}>
                        <ProfileCard />

                        <a href={Pdf} target="_blank">
                            <button className={resume} id="conBorder">
                                <img className={image}
                                    id="slider-1"
                                    alt="Star"
                                    src={resumeIcon}
                                    placeholder="blurred"
                                    layout="fixed"
                                    width={IMAGESIZE}
                                    height={IMAGESIZE} />
                                <h1 className={resumeText}>RESUME</h1>
                            </button>
                        </a>
                        <SocialMedia />
                    </div>
                    <ImageSlider />
                </div>
            </body>
        </>
    );
}