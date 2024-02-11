import React, { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import './imageSlider.scss'

const ImageSlider = ({ imageUrls }) => {

    const [imageIndex, setImageIndex] = useState(2)

    const showNextImage = () => {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    }

    const showPrevImage = () => {

        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    return (
        <div className='imageSlider' >
            <img src={imageUrls[imageIndex]} className='img-slider-img' alt="" />
            <button onClick={showNextImage} className='img-slider-btn' style={{ left: "0" }} > <ArrowBigLeft /> </button>
            <button onClick={showPrevImage} className='img-slider-btn' style={{ right: "0" }} > <ArrowBigRight /> </button>
        </div>
    )
}

export default ImageSlider