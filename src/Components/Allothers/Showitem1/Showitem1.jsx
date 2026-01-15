import React, { useEffect, useState } from 'react'
import './Showitem1.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import star from '../../../assets/star.svg'
import { decrement, increment } from '../../../Context/Reducer';
import Cart from '../../Cart/Cart';

const Showitem1 = ({ seconds }) => {
    const [showcart, setshowcart] = useState(false)
    const cartItems = useSelector(state => state.products.cartItems)
    const [selectedImageKey, setSelectedImageKey] = useState("image2");
    const handleAddToCart = () => {
        addToCart({
            ...product,
            selectedImageKey: selectedImageKey,
        });
    };
    const { id } = useParams();
    const products = useSelector(state => state.products.products)
    const product = products.find(item => item.id === id);
    const images = product.temp.reduce((acc, obj) => ({ ...acc, ...obj }), {});
    const [selectedCatagory, setSelectedCatagory] = useState('image2')
    const [currentIndex, setCurrentIndex] = useState(0);
    const selectedImages = images[selectedCatagory] || []
    const quantity = useSelector(state => state.products.quantity)
    const dispatch = useDispatch();
    const getFig = (product, imageKey, figKey) => {
        const imageSet = product.temp.find(item => item[imageKey])?.[imageKey];
        return imageSet?.find(fig => fig[figKey])?.[figKey];
    };
    const navigate = useNavigate()
    const selectedImageUrl = getFig(product, selectedCatagory, "fig1")
    const handleBuyNow = () => {
        navigate(`/showitem/${product.id}/buynow`, {
            state: {
                productId: product.id,
                imageUrl: selectedImageUrl
            }
        })
    }



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
                                    onClick={() => setCurrentIndex(index)}
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
                                onClick={() => { setSelectedCatagory(category); setCurrentIndex(0); setSelectedImageKey(category); }}
                            />
                        ))}
                    </div>
                    <hr className='hrr' />
                    <div className="right-quantity">
                        <p>Quantity:</p><span>
                            <div onClick={() => dispatch(decrement(product.id))} className='minus' >-</div>
                            <div>{cartItems[product.id]}</div>
                            <div onClick={() => dispatch(increment(product.id))} className='plus' >+</div>
                        </span>
                    </div>
                    <div className="btno">
                        <button onClick={handleBuyNow} className='btno1'>BUY NOW</button>
                        <button onClick={() => { setshowcart(true); handleAddToCart() }} className='btno2' >ADD TO CART</button>
                        {showcart ? <Cart setshowcart={setshowcart}  selectedCatagory={selectedCatagory} /> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showitem1