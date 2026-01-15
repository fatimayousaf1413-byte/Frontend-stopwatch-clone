import React from 'react'
import './Other.css'
import icon1 from '../../../assets/icon1.svg'
import icon2 from '../../../assets/icon2.svg'
import icon3 from '../../../assets/icon3.svg'
import icon4 from '../../../assets/icon4.svg'
import { Link } from 'react-router-dom'

const Other = () => {
    return (
        <>
            <div className='other' >
                <div className="other-icon">
                    <img src={icon1} alt="" />
                    <span>1 YEAR WARRENTY</span>
                </div>
                <div className="other-icon">
                    <img src={icon2} alt="" />
                    <span>7 DAYS REPLACEMENT</span>
                </div>
                <div className="other-icon">
                    <img src={icon3} alt="" />
                    <span>FREE DELIVERY</span>
                </div>
                <div className="other-icon">
                    <img src={icon4} alt="" />
                    <span>500,000+ CUSTOMERS</span>
                </div>
            </div>
            <div className='video' >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZwnXW_7fzk0?si=POP3rZAc7MXoZwYa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="launched">
                <div className="launch">
                    <h2>Just Launched</h2>
                    <div className="view1"><Link to={'/smart-watches'} style={{ textDecoration: 'none', color: '#6a5cfc' }}  >View all</Link></div>
                </div>
                {/* <div className='twoo'>
                    <p>SMART WATCHES</p>
                    <p>ZERO EARBUDS</p>
                </div> */}
            </div>
        </>
    )
}

export default Other