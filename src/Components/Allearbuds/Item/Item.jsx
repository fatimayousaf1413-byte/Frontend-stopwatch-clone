import React, { useState } from 'react'
import './Item.css'
import star from '../../../assets/star.svg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cart from '../../Cart/Cart'

const Item = ({ name, off, discription, price, label, id, rating, key, image1, color1, color2, color3, img2, img3, img4 }) => {
    const [handle, sethandle] = useState(0)
    const [selected, setselected] = useState(1)

    return (
        <div>
            <div className='product-item' key={id}>
                <div className="imge duration-300">
                    <div className="show">
                        <p>{label}</p>
                        <div className="span">
                            <img src={star} alt="" />
                            <span>{rating}</span>
                        </div>
                    </div>
                    <div className="you ">
                        {handle === 0 ? <img className='here' src={img2} alt="" /> :
                            handle === 1 ? <img className='here' src={img3} alt="" /> :
                                handle === 2 ? <img className='here' src={img4} alt="" /> : ''}
                        <Link to={`/showitem/${id}`} style={{ textDecoration: 'none', color: "#555" }}> <img className='here1' src={image1} alt="" /></Link>
                    </div>
                </div>
                <div className="head">
                    <h2>{name}</h2>
                    <p>{off}</p>
                </div>
                <div className="p">
                    <p>{discription}</p>
                </div>
                <div className="color">
                    {selected === 1 ?
                        <div onClick={() => { sethandle(0), setselected(1) }} className='dott one selected' style={{ background: color1 }} ></div> : <div onClick={() => { sethandle(0), setselected(1) }} className='dott one' style={{ background: color1 }} ></div>}
                    {selected === 2 ?
                        <div onClick={() => { sethandle(1), setselected(2) }} className='dott two selected' style={{ background: color2 }} ></div> :
                        <div onClick={() => { sethandle(1), setselected(2) }} className='dott two' style={{ background: color2 }} ></div>}
                    {selected === 3 ?
                        <div onClick={() => { sethandle(2), setselected(3) }} className='dott three selected' style={{ background: color3 }}  ></div> :
                        <div onClick={() => { sethandle(2), setselected(3) }} className='dott three' style={{ background: color3 }}  ></div>}
                </div>
                <div className="both">
                    <p>{price}</p>
                    <Link to={`/showitem/${id}`} style={{ textDecoration: 'none', color: "#555" }}> <button>Add To Cart</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item