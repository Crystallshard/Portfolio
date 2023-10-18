import * as React from "react"
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import {
    checkbox,
    theLabel,
} from "./darkmode-toggle.module.css"

const Darkmode = (props) => {

    const [toggle, setToggle] = React.useState(localStorage.getItem('toggle') === "true")
    React.useEffect(() => {
        localStorage.setItem('toggle', toggle)
    }, [toggle]);

    if(toggle === true){
        window.onload = function() {
                    var buttonID = document.getElementById("darkmode");
                    buttonID.checked = true;
        }
    }
    
    if(toggle === false){
        window.onload = function() {
                    var buttonID = document.getElementById("darkmode");
                    buttonID.checked = false;
        }
    }
    
    // localStorage.clear();
    return (
        <>
            <input className={checkbox} type="checkbox" onClick={() => {setToggle(!toggle)}} id="darkmode" />
            <label className={theLabel} for="darkmode" onClick={props.onClick}></label>
        </>
    )
}

export default Darkmode;