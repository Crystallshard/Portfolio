import * as React from "react"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    navBarContainer,
    navLineDivider,
    projectList,
    topLineDivider,
    profileCircle,
    pSelectionHighlight,
    SelectionHighlight,
    firstIcon,
    ribbon,
    bottomLineDivider,
    inputRadioOne,
    inputRadioTwo,
    theSelectionThree,
    projectCircle,
    profileContainer,
    innerCircle3,
    project,
    testContainer,
    list,
    listContainer,
    darkmodeContainer,
    topLineContainer,
    bottomLineContainer,
    homeIcon,
} from "./navbar.module.css"
import personIcon from './images/person icon.png';
import newRibbon from './images/new ribbon.png';

function NavBar() {
    const ICONSIZE = 45;
    const RIBBONSIZE = 40;

    const loc = location.pathname;
    console.log(loc)

    const [radio, setRadio] = useState();

    useEffect(() => {
        setRadio(sessionStorage.getItem('key'))
    })

    if (radio === null) {
        sessionStorage.setItem('key', 'profile');
    }

    function profileClick() {
        sessionStorage.setItem('key', 'profile');
        var buttonID = document.getElementById("check");
        buttonID.checked = true;
    };


    function starsClick() {
        sessionStorage.setItem('key', 'stars');
        var buttonID = document.getElementById("stars");
        buttonID.checked = true;
    }

    // sessionStorage.clear();
    return (
        <>
            <div className={navBarContainer}>
                <div className={testContainer}>
                    <div className={profileContainer}>
                        <Link to="/">
                            <input
                                className={inputRadioOne}
                                id="check"
                                type="radio"
                                name="radio"
                                value={radio}
                                checked={radio === 'profile'}
                            />
                            <label className={profileCircle}
                                for="check"
                                onClick={profileClick}
                            >
                                <div className={pSelectionHighlight}></div>
                                <img
                                className={homeIcon}
                                    alt="nametag"
                                    src={personIcon}
                                    placeholder="blurred"
                                    layout="fixed"
                                    width={ICONSIZE}
                                    height={ICONSIZE}
                                />
                            </label>
                        </Link>
                    </div>



                    <ul className={projectList}>
                        <div className={topLineContainer}>
                            <div className={topLineDivider} id="navLineSection"></div>
                        </div>
                        <div className={listContainer}>
                            <div className={list}>
                                <li className={project}>
                                    <Link to="/Stars">
                                        <input
                                            className={inputRadioTwo}
                                            id="stars"
                                            type="radio"
                                            name="radio"
                                            value={radio}
                                            checked={radio === 'stars'}
                                        // checked={currTheme === 'stars'}                             
                                        />
                                        <label className={projectCircle}
                                            for="stars"
                                            onClick={starsClick}

                                        >
                                            <div className={SelectionHighlight}></div>
                                            {/* <img
                                    className={ribbon}
                                    alt="nametag"
                                    src={newRibbon}
                                    placeholder="blurred"
                                    layout="fixed"
                                    width={RIBBONSIZE}
                                    height={RIBBONSIZE} /> */}
                                            <svg className={firstIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="216px"
                                                height="216px" viewBox="0 0 216 216" enable-background="new 0 0 216 216" xml:space="preserve">
                                                <g id="Layer_3">
                                                    <path fill="none" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="30" d="M90.917,36.583" />
                                                    <path fill="#231F20" d="M91.167,181.44c0,0,2.836-53.174,14.333-67.681c7.417-9.358,23.25-11.843,29.25-11.065
		c2.943,0.382,8.145,1.951,10.618,6.388c3.608,6.474,5.508,25,5.508,25s1.812-18.753,5.614-25.003
		c4.414-7.255,16.344-8.136,16.344-8.136l0,0c0,0-11.806-0.401-16.344-8.064c-4.24-7.16-5.614-24.547-5.614-24.547
		S148.833,87.713,145,92.88c-3.461,4.666-6.333,6.537-10.25,7.055l0,0c0,0-18.878,0.681-31.5-12.814
		c-7.75-8.287-12.083-50.042-12.083-50.042l0,0c0,0-4.49,40.66-12.437,50.042c-10.833,12.79-36.817,13.832-36.817,13.832
		s24.745,0.913,34.753,12.808C88.583,127.924,91.167,181.44,91.167,181.44L91.167,181.44z"/>
                                                </g>
                                            </svg>
                                        </label>
                                    </Link>
                                </li>
                                {/* <li className={project}>
                                    <Link to="/Stars">
                                        <input
                                            className={inputRadioTwo}
                                            id="stars"
                                            type="radio"
                                            name="radio"
                                            value={radio}
                                            checked={radio === 'stars'}
                                        />
                                        <label className={projectCircle}
                                            for="stars"
                                            onClick={starsClick}

                                        >
                                            <div className={SelectionHighlight}></div>
                                            <svg className={firstIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="216px"
                                                height="216px" viewBox="0 0 216 216" enable-background="new 0 0 216 216" xml:space="preserve">
                                                <g id="Layer_3">
                                                    <path fill="none" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="30" d="M90.917,36.583" />
                                                    <path fill="#231F20" d="M91.167,181.44c0,0,2.836-53.174,14.333-67.681c7.417-9.358,23.25-11.843,29.25-11.065
		c2.943,0.382,8.145,1.951,10.618,6.388c3.608,6.474,5.508,25,5.508,25s1.812-18.753,5.614-25.003
		c4.414-7.255,16.344-8.136,16.344-8.136l0,0c0,0-11.806-0.401-16.344-8.064c-4.24-7.16-5.614-24.547-5.614-24.547
		S148.833,87.713,145,92.88c-3.461,4.666-6.333,6.537-10.25,7.055l0,0c0,0-18.878,0.681-31.5-12.814
		c-7.75-8.287-12.083-50.042-12.083-50.042l0,0c0,0-4.49,40.66-12.437,50.042c-10.833,12.79-36.817,13.832-36.817,13.832
		s24.745,0.913,34.753,12.808C88.583,127.924,91.167,181.44,91.167,181.44L91.167,181.44z"/>
                                                </g>
                                            </svg>
                                        </label>
                                    </Link>
                                </li> */}
                            </div>
                        </div>
                        <div className={bottomLineContainer}>
                            <div className={bottomLineDivider} id="navLineSection"></div>
                        </div>
                    </ul>
                    <div className={darkmodeContainer}></div>
                </div>
                <div className={navLineDivider} id="navLine"></div>
            </div>
        </>
    )
}

export default NavBar;