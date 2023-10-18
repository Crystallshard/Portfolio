import * as React from "react"
import {
    container,
    sliderWrapper,
    slider,
    sliderNav,
    sliderNavList,
    sliderNavListItems,
    image,
    sliderNavBackground,
    sliderButton,
    sliderButtonCover
} from "./image-slider.module.css"
import starsBlack from './images/starsShopPage.png';
import starsWhite from './images/Fixed-Sparkle-star-test2-white.png';



const ImageSlider = () => {

    return (
        <>
            <div className={container}>
                <div className={sliderWrapper}>
                    <div className={slider} id="conBorderSlider">
                        <img className={image} id="slide-1"
                            alt="Star"
                            src={starsBlack}
                            placeholder="blurred"
                            layout="fixed"
                            width={768}
                            height={531} />
                        <img className={image} id="slide-2"
                            alt="Star"
                            src={starsWhite}
                            placeholder="blurred"
                            layout="fixed"
                            width={768}
                            height={530} />
                    </div>
                    <div className={sliderNav}>
                        <ul className={sliderNavList}>
                            <li className={sliderNavListItems}>
                                <a className={sliderButton} href="#slide-1"></a>
                                <a className={sliderButton} href="#slide-2"></a>
                            </li>
                            <li className={sliderNavListItems}>
                                <div className={sliderButtonCover}></div>
                                <div className={sliderButtonCover}></div>
                            </li>
                        </ul>
                    </div>
                    <section className={sliderNavBackground} id="conBorderBack"></section>
                </div>
            </div>
        </>
    )
}

export default ImageSlider;