import React, { useEffect, useState } from 'react'
import './Body.css'
import img1 from '../../../assets/img1.webp'
import img2 from '../../../assets/img2.webp'
import img3 from '../../../assets/img3.webp'
import img4 from '../../../assets/img4.webp'
import { Link } from 'react-router-dom'

const Body = () => {
    const [active, setactive] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setactive((previndex) => (previndex + 1) % images.length)
        }, 4000);
        return () => clearInterval(interval)
    }, [])

    const images = [
        img1, img2, img3, img4
    ]
    return (
        <div className= {`conatiner  bg-${active}`} >
            <Link to={'/showitem/24'} ><div className="images">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index + 1}`} className={`slider-image ${index === active ? "active" : ''}`} />
                ))}
            </div></Link>
        </div>
    )
}

export default Body