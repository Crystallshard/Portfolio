import * as React from "react"
import { useState } from "react"
import { Link } from 'react-router-dom';
import {
    container,
    carouselContainer,
    carousel,
    inner,
    carouselButtonContainer,
    carouselButtons,
    indicators,
    circle,
    circleActive,
    indicatorButtons,
    boxContainer,
    descriptionContainer,
    description,
    boxHeader,
    box,
    images,
    githubLinkContainer,
    githubLink,
    githubImage,
} from "./stars-page-carousel.module.css"

//components
import StarsPageCarouselItems from "../StarsPage Carousel/stars-page-carousel-items"
import Modal from '../Modal/modal';
//images
import LandingPage from "./images/Landing-Page.png"
import ShopPage from "./images/Shop-Page.png"
import ProductPage from "./images/Product-Card.png"
import BagToggle from "./images/Bag-Toggle.png"
import MenuToggle from "./images/Menu-Toggle.png"
import ContactUs from "./images/Contact-Us.png"
import github from "../Social Media/images/github-logo.png"
//image previews
import LandingPagePreview from "./images/preview/Landing-Page-Preview.png"
import ShopPagePreview from "./images/preview/Shop-Page-Preview.png"
import ProductPagePreview from "./images/preview/Product-Card-Preview.png"
import BagTogglePreview from "./images/preview/Bag-Toggle-Preview.png"
import MenuTogglePreview from "./images/preview/Menu-Toggle-Preview.png"
import ContactUsPreview from "./images/preview/Contact-Us-Preview.png"

const StarsPageCarousel = () => {
    //im doing it like this because im an idiot who cant code i know it wrong 
    const [openModalOne, setOpenModalOne] = useState(false)
    const [openModalTwo, setOpenModalTwo] = useState(false)
    const [openModalThree, setOpenModalThree] = useState(false)
    const [openModalFour, setOpenModalFour] = useState(false)
    const [openModalFive, setOpenModalFive] = useState(false)
    const [openModalSix, setOpenModalSix] = useState(false)

    const [activeIndex, setActiveIndex] = useState(0)
    const items = [
        {
            title: <div className={descriptionContainer}>

                <div className={description}>
                    <p>StarsUnlocked is online clothing store concept designed and developed completely from scratch.</p>
                    <p>Developed with React, GatsbyJS, HTML and CSS. Layout designed with Figma.</p>
                </div>
                <div className={githubLinkContainer}>
                    <Link target="_blank" to="https://github.com/Crystallshard/Stars">
                        <div className={githubLink}>

                            <img
                                className={githubImage}
                                alt="nametag"
                                src={github}
                                placeholder="blurred"
                                layout="fixed"
                            />
                        </div>
                    </Link>

                </div>
                <div className={description}>

                    <p>Layout rough drafts below.</p>
                </div>

            </div>,
        },
        {
            title: <div className={boxContainer}>
                <div className={box} id="starsPageInset" onClick={() => { setOpenModalOne(true) }}>

                    <section className={boxHeader} id="bottomBorder"><p>LANDING PAGE</p></section>
                    <img
                        className={images}
                        alt="nametag"
                        src={LandingPagePreview}
                        placeholder="blurred"
                        layout="fixed"
                    />
                </div>
                <div className={box} id="starsPageInset" onClick={() => { setOpenModalTwo(true) }}>
                    <section className={boxHeader} id="bottomBorder"><p>SHOP PAGE</p></section>
                    <img
                        className={images}
                        alt="nametag"
                        src={ShopPagePreview}
                        placeholder="blurred"
                        layout="fixed"
                    />
                </div>
                <div className={box} id="starsPageInset" onClick={() => { setOpenModalThree(true) }}>
                    <section className={boxHeader} id="bottomBorder"><p>PRODUCT PAGE</p></section>
                    <img
                        className={images}
                        alt="nametag"
                        src={ProductPagePreview}
                        placeholder="blurred"
                        layout="fixed"
                    />
                </div>
            </div>,
        },
        {

            title: <div className={boxContainer}>
                <div className={box} id="starsPageInset" onClick={() => { setOpenModalFour(true) }}>
                    <section className={boxHeader} id="bottomBorder"><p>BAG TOGGLE</p></section>
                    <img
                        className={images}
                        alt="nametag"
                        src={BagTogglePreview}
                        placeholder="blurred"
                        layout="fixed"
                    />
                </div>
                <div className={box} id="starsPageInset" onClick={() => { setOpenModalFive(true) }}>
                    <section className={boxHeader} id="bottomBorder"><p>MENU TOGGLE</p></section>
                    <img
                        className={images}
                        alt="nametag"
                        src={MenuTogglePreview}
                        placeholder="blurred"
                        layout="fixed"
                    />
                </div>
                <div className={box} id="starsPageInset" onClick={() => { setOpenModalSix(true) }}>
                    <section className={boxHeader} id="bottomBorder"><p>CONTACT US</p></section>
                    <img
                        className={images}
                        alt="nametag"
                        src={ContactUsPreview}
                        placeholder="blurred"
                        layout="fixed"
                    />
                </div>
            </div>,
        },
    ]
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }
        console.log(newIndex)
        setActiveIndex(newIndex)
    }
    return (
        <>
            <div className={container}>

                {openModalOne && <Modal closeModal={setOpenModalOne} name={"pic one"} body={LandingPage}/>}
                {openModalTwo && <Modal closeModal={setOpenModalTwo} name={"pic two"} body={ShopPage}/>}
                {openModalThree && <Modal closeModal={setOpenModalThree} name={"pic three"} body={ProductPage}/>}
                {openModalFour && <Modal closeModal={setOpenModalFour} name={"pic four"} body={BagToggle}/>}
                {openModalFive && <Modal closeModal={setOpenModalFive} name={"pic five"} body={MenuToggle}/>}
                {openModalSix && <Modal closeModal={setOpenModalSix} name={"pic six"} body={ContactUs}/>}



                <div className={carouselContainer}>
                    <div className={carousel} id="starsPageInset">
                        <div className={inner} style={{ transform: `translateY(-${activeIndex * 33.3}%)` }}>
                            {items.map((item) => {
                                return <StarsPageCarouselItems item={item} width={"100%"} />

                            })}
                        </div>

                    </div>
                </div>
                <div className={carouselButtonContainer}>
                    <div className={carouselButtons} id="starsPageInset">
                        <div className={indicators}>
                            {items.map((item, index) => {
                                return (
                                    <button className={indicatorButtons} onClick={() => { updateIndex(index) }}>
                                        <div className={circle}></div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarsPageCarousel;