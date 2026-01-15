import React from 'react'
import './Box.css'
import img5 from '../../../assets/img5.avif'
import img6 from '../../../assets/img6.png'
import img7 from '../../../assets/img7.avif'
import img8 from '../../../assets/img8.avif'
import img9 from '../../../assets/img9.webp'
import { Link } from 'react-router-dom'


const Box = () => {
    return (
        <div className='box-img'>
            <Link to={'/smart-watches'} style={{ textDecoration: 'none', color: 'white' }} > <div className="image-item">
                <img src={img5} alt="" />
                <span>AMOLED</span>
            </div></Link>
            <Link to={'/newlaunch'} style={{ textDecoration: 'none', color: 'white' }}  > <div className="image-item">
                <img src={img6} alt="" />
                <span>New Launch</span>
            </div></Link>
            <Link to={'/vision'} style={{ textDecoration: 'none', color: 'white' }}  ><div className="image-item">
                <img src={img7} alt="" />
                <span>Vision 2025</span>
            </div></Link> 
            <Link to={'/bestsellers'} style={{ textDecoration: 'none', color: 'white' }}  > <div className="image-item">
                <img src={img8} alt="" />
                <span>Best Sellers</span>
            </div></Link>
            <Link to={'./earbuds'} style={{ textDecoration: 'none', color: 'white' }}  > <div className="image-item">
                <img src={img9} alt="" />
                <span>Earbuds</span>
            </div></Link>
        </div>
    )
}

export default Box