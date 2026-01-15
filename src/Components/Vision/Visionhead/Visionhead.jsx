import React, { useEffect, useState } from 'react'
import './Visionhead.css'
import video from '../../../assets/video1.mp4'
import pic from '../../../assets/visionimg1.webp'
import pic1 from '../../../assets/visionimg2.webp'
import pic2 from '../../../assets/visionimg6.webp'
import pic3 from '../../../assets/visionimg7.webp'
import pic4 from '../../../assets/visionimg8.webp'
import pic5 from '../../../assets/visionimg9.webp'
import { useSelector } from 'react-redux'
import Item from '../../Allearbuds/Item/Item'

const Visionhead = () => {
    const products = useSelector(state => state.products.mixture)
    const selectproduct = products.filter(item => ['1', '2', '3', '4'].includes(item.id))
    const [show, setshow] = useState([false, false, false, false])
    useEffect(() => {
        const handleScroll = () => {
            const img = document.querySelector(".vision-body img");
            const rect = img.getBoundingClientRect();
            // Check if image is in view
            if (rect.top < window.innerHeight * 0.7) {
                setshow(true); // Set visibility to true when image is in view
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run on mount to check visibility immediately
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className='visionhead'>
            <video className='visionvideo' src={video}></video>
            <img className='visionimg' src={pic} alt="" />
            <div className='products' >
                {selectproduct.map((item, index) => (
                    <div className="raaani" style={{}}>
                        <Item key={index} id={item.id} discription={item.discription} off={item.off} image1={item.image1} name={item.name} image={item.image} price={item.price} label={item.label} rating={item.rating} color1={item.color1} color2={item.color2} color3={item.color3} img2={item.image2} img3={item.image3} img4={item.image4} />
                    </div>
                ))}
            </div>
            <div className="vision-section">
                <img src={pic1} alt="" />
                <h1>Vision 2025</h1>
                <h3>
                    Technology is reshaping the world at an unprecedented pace. But in Pakistan, the gap between innovation and accessibility still exists. At ZERO, we see this not as a challenge, but as an opportunity—to push boundaries, rethink possibilities, and bring world-class technology within reach.
                </h3>
            </div>
            <div className="vision-body">
                <img
                    src={pic2}
                    alt=""
                />
                <img
                    src={pic3}
                    alt=""
                />
                <img
                    src={pic4}
                    alt=""
                />
                <img
                    src={pic5}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Visionhead