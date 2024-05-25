import * as React from "react"
import { Link } from 'react-router-dom';
import {
  container,
  sliderWrapper,
  slider,
  sliderNav,
  sliderNavBackground,
  sliderButton,
  sliderButtonCover,
  Title,
  sectionLine,
  condition,
  svgContainer,
  image,
  imageList,
  list,
  paragraphsContainer,
  sliderNavList,
  sliderNavListItems,
  bubble,
  about,
  paragraph,
  github,
  displayArea,
  linkContainer,
  infoContainer,
  aboutAndImageListContainer,
} from "./stars-page-slider.module.css"
import monsterStarsLong from './images/gitlogo long.png';
import starsLong from './images/Stars long.png';
import reactLogo from './images/reactLogo.png';
import viteLogo from './images/gatsbyLogo.png';
import mySqlLogo from './images/mySql logo.png';

//components
import StarsPageCarousel from "../StarsPage Carousel/stars-page-carousel"


const StarsPageSlider = () => {

  return (
    <>
      <div className={displayArea}>
        <div className={container}>
          <div className={sliderWrapper} id="conBorderSlider">
            <div className={slider} >
              <img className={image}
                id="slider-1"
                alt="Star"
                src={starsLong}
                placeholder="blurred"
                layout="fixed"
              // width={1328}
              // height={277} 
              />
              {/* <img className={image}
                id="slider-2"
                alt="Star"
                src={monsterStarsLong}
                placeholder="blurred"
                layout="fixed"
              width={1328}
              height={277} 
              /> */}
            </div>
            {/* <div className={sliderNav}>
              <ul className={sliderNavList}>
                <li className={sliderNavListItems}>
                  <a className={sliderButton} href="#slider-1"></a>
                  <a className={sliderButton} href="#slider-2"></a>
                </li>
                <li className={sliderNavListItems}>
                  <div className={sliderButtonCover}></div>
                  <div className={sliderButtonCover}></div>
                </li>
              </ul>
            </div> */}
          </div>
          <section className={sliderNavBackground} id="conBorderBack">
            <div className={infoContainer}>
              <div className={linkContainer}>
                <svg className={svgContainer} xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 13 18" fill="none">
                  <path d="M0.373201 15.374L0.373201 15.624L0.123201 15.624L0.123201 15.374L0.373201 15.374ZM12.1833 15.1972C12.2809 15.2948 12.2809 15.4531 12.1833 15.5508L10.5923 17.1418C10.4946 17.2394 10.3364 17.2394 10.2387 17.1418C10.1411 17.0441 10.1411 16.8858 10.2387 16.7882L11.6529 15.374L10.2387 13.9598C10.1411 13.8622 10.1411 13.7039 10.2387 13.6062C10.3363 13.5086 10.4946 13.5086 10.5923 13.6062L12.1833 15.1972ZM0.623201 -5.7831e-05L0.623201 15.374L0.123201 15.374L0.123201 -5.78471e-05L0.623201 -5.7831e-05ZM0.3732 15.124L12.0065 15.124L12.0065 15.624L0.373201 15.624L0.3732 15.124Z" fill="#E0E0E0" />
                </svg>
                <Link target="_blank" to="https://starsunlocked.ca/">
                  <div className={bubble} id="bubble">
                    <h2 className={Title}>STARSUNLOCKED</h2>
                  </div>
                </Link>
              </div>
              <div className={aboutAndImageListContainer}>
                <p className={about}>
                  E-Commerce Clothing Website
                </p>
                <ul className={imageList}>
                  <li className={list}>
                    <img
                      id="react-logo"
                      alt="Star"
                      src={reactLogo}
                      placeholder="blurred"
                      layout="fixed"
                      width={25}
                      height={25} />
                  </li>
                  <li className={list}>
                    <img
                      id="vite-logo"
                      alt="Star"
                      src={viteLogo}
                      placeholder="blurred"
                      layout="fixed"
                      width={25}
                      height={25} />
                  </li>
                  {/* <li className={list}>
                  <img
                    id="mySql-logo"
                    alt="Star"
                    src={mySqlLogo}
                    placeholder="blurred"
                    layout="fixed"
                    width={26}
                    height={26} />
                </li> */}
                </ul>
              </div>
            </div>
            {/* <div className={paragraphsContainer}> */}
              {/* <p>
                fashion e-commerce wesite built from scratch.
              </p> */}
              <StarsPageCarousel/>
              {/* <p className={paragraph}>Check the
                <Link target="_blank" to="https://github.com/Crystallshard/Stars">
                  <span className={github}>&nbsp;GitHub&nbsp;</span>
                </Link>
                for more details and updates.</p> */}
            {/* </div> */}
          </section>
        </div>
      </div>
    </>
  )
}

export default StarsPageSlider