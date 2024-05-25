import * as React from "react"
import {
    checkbox,
    theLabel,
    darkmodeContainer,
} from "./darkmode-toggle.module.css"

const Darkmode = (props) => {

    const [toggle, setToggle] = React.useState(localStorage.getItem('toggle') === "true")
    React.useEffect(() => {
        localStorage.setItem('toggle', toggle)
    }, [toggle]);

    if (toggle === true) {
        window.onload = function () {
            var buttonID = document.getElementById("darkmode");
            buttonID.checked = true;
        }
    }

    if (toggle === false) {
        window.onload = function () {
            var buttonID = document.getElementById("darkmode");
            buttonID.checked = false;
        }
    }

    // localStorage.clear();
    return (
        <>
            <div className={darkmodeContainer}>
                <input className={checkbox} type="checkbox" onClick={() => { setToggle(!toggle) }} id="darkmode" />
                <label className={theLabel} for="darkmode" onClick={props.onClick}></label>
            </div>
        </>
    )
}

export default Darkmode;