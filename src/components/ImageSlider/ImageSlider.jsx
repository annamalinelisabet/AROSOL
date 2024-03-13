import './ImageSlider.css'
import 'animate.css'
import { useEffect, useState, useRef } from 'react'

const ImageSlider = ({ images }) => {
    const [imgIndex, setImgIndex] = useState(0)
    const timeoutRef = useRef(null)
    const delay = 4000

    const resetTimeout = () => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setImgIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay    
        )

        return () => {
            resetTimeout()
        }
    }, [imgIndex])
      
    return (
        <div className='ImageSlider container'>
            <img src={images[imgIndex]} key={imgIndex} />
        </div>
    )
}

export default ImageSlider