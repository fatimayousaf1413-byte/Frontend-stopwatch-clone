import React, { useEffect, useState } from 'react'
import './showitem2.css'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import star from '../../../assets/star.svg'

const Showitem2 = ({ seconds }) => {
    const { id } = useParams();
    const products = useSelector(state => state.products.products)
    const product = products.find((item) => item.id === id)
    const images = product.temp.reduce((acc, obj) => ({ ...acc, ...obj }), {});
    const [selectedCatagory, setSelectedCatagory] = useState('image2')
    const selectedImages = images[selectedCatagory] || []

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (selectedImages.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedImages.length)
        }, 3000);
        return () => clearInterval(interval);
    }, [selectedCatagory, selectedImages.length]);


    const [timeLeft, settimeLeft] = useState(seconds)
    useEffect(() => {
        if (timeLeft < 0) return;
        const timer = setInterval(() => {
            settimeLeft((prevTime) => prevTime - 1)
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft])


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='padd'>
            <div className="empty">
                <div className=' fzol'>Home /Rover Pro Earbuds</div>
            </div>
            <div className='showitem'>
                <div className="showitem-left">
                    <div className="left-image">
                        <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images[selectedCatagory].map((fig, index) => (
                                <img
                                    key={index}
                                    src={Object.values(fig)[0]}
                                    alt={`Image ${index + 1}`}
                                    className={`gallery-image ${index === currentIndex ? "active" : ""}`}
                                    onClick={() => setCurrentIndex(index)} // Click to update index
                                />
                            ))}
                        </div>
                    </div>
                    <div className="slider-container">
                        <div className="bottom-images">
                            {images[selectedCatagory].map((fig, index) => (
                                <img
                                    key={index}
                                    src={Object.values(fig)[0]}
                                    alt={`Gallery Image ${index + 1}`}
                                    className={`thumbnail ${index === currentIndex ? "active" : ""}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="showitem-right">
                    <div className="toop">
                        <p>{product.label}</p>
                        <div className="spaan">
                            <img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" />
                            <span>{product.rating}reviews</span>
                        </div>
                    </div>
                    <h1>{product.name}</h1>
                    <p className='pp' >{product.text}</p>
                    <h2 style={{ fontWeight: "600" }} >{product.price}</h2>
                    <div className="right-text">
                        <p>{product.off}</p>
                        <h4>Sale Might End In {timeLeft > 0 ? `${timeLeft}h` : 'Times up'}</h4>
                    </div>
                    <p className='ptag'>Color : Glacier Blue</p>
                    <div className="right-imgs">
                        {Object.keys(images).map((category, index) => (
                            <img
                                key={index}
                                src={Object.values(images[category][0])[0]}
                                alt={category}
                                className={`right-thumbnail ${selectedCatagory === category ? "active" : ""}`}
                                onClick={() => { setSelectedCatagory(category); setCurrentIndex(0) }}
                            />
                        ))}
                    </div>
                    <hr className='hrr' />
                    <div className="right-quantity">
                        <p>Quantity:</p><span>
                            <div>-</div>
                            <div>1</div>
                            <div>+</div>
                        </span>
                    </div>
                    <div className="btno">
                    <Link to={`/showitem/${id}/buynow`}><button className='btno1' > BUY NOW</button></Link>
                        <button className='btno2' >ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showitem2