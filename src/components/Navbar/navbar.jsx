import * as React from "react"
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import {
    navBarContainer,
    navLineDivider,
    projectList,
    topLineDivider,
    profileCircle,
    pSelectionHighlight,
    SelectionHighlight,
    profileIcon,
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
} from "./navbar.module.css"
import personIcon from './images/person icon.png';
import newRibbon from './images/new ribbon.png';

function NavBar() {
    const ICONSIZE = 45;
    const RIBBONSIZE = 40;

    const [radio, setRadio] = useState();
    
    useEffect(() => {
        setRadio(sessionStorage.getItem('key'))
    })

    if(radio === null){
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
                                className={profileIcon}
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

                <div className={topLineDivider} id="navLineSection"></div>

                <ul className={projectList}>
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
                                <img
                                    className={ribbon}
                                    alt="nametag"
                                    src={newRibbon}
                                    placeholder="blurred"
                                    layout="fixed"
                                    width={RIBBONSIZE}
                                    height={RIBBONSIZE} />
                                <svg className={firstIcon} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="216px"
                                    height="216px" viewBox="0 0 216 216" enable-background="new 0 0 216 216" xml: space="preserve">
                                    <g id="Layer_2" display="none">
                                        <image display="inline" overflow="visible" opacity="0.2" width="546" height="638" xlink: href="data:image/png;base64,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
A1wQbqviE8SqAAAAAElFTkSuQmCC" transform="matrix(0.24 0 0 0.24 42.2295 37.0176)">
                                        </image>
                                    </g>
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

                    {/* <li className={list}>

                    <input
                        className={theSelectionThree}
                        id="checked3"
                        type="radio"
                        name="radio"
                        
                    />
                    <label className={label1} for="checked3">
                        <div className={innerCircle3}></div>
                    </label>

                </li> */}
                </ul>
                <div className={bottomLineDivider} id="navLineSection"></div>
                <div className={navLineDivider} id="navLine"></div>
            </div>
        </>
    )
}

export default NavBar;