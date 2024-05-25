import StarsPageSlider from "../../src/components/StarsPage Slider/stars-page-slider"
import NavBar from "../components/Navbar/navbar";

import {
    starsBody,
} from "./stars.module.css"

export const Stars = () => {
    return (
        <>
            <div className={starsBody}>
                <NavBar />
                <StarsPageSlider />
            </div>
        </>
    );
}