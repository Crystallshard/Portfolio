import * as React from "react"
import { useState } from "react"
import {
    carouselItem,
} from "./stars-page-carousel.module.css"

//components
import Modal from '../Modal/modal';


const StarsPageCarouselItems = ({item}) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div className={carouselItem}>
                <div onClick={() => { setOpenModal(true) }}>{item.title}</div>
                
                {/* <div className={box}></div> */}
            </div>
            {/* {openModal && <Modal closeModal={setOpenModal} name={"PAGE"} />} */}
        </>
    )
}

export default StarsPageCarouselItems;