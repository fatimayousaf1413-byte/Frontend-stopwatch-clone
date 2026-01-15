import React from 'react'
import './Watchshow.css'
import image from '../../../assets/watchshow.webp'
import img4 from '../../../assets/watch1.webp'
import img32 from '../../../assets/watch2.webp'
import img28 from '../../../assets/watch3.webp'
import img21 from '../../../assets/watch4.webp'
import arrow from '../../../assets/arrow.svg'
import { Link } from 'react-router-dom'

const Watchshow = () => {
  return (
    <div className='watchshow' >
      <div className="watchshow1 border">
        <Link to={'/showitem/4'} ><img src={image} alt="" /></Link>
      </div>
      <div className="bothh">
        <div className="watchshow2 border">
          <div className="watchshow22">
            <p>For Fashion</p>
            <img src={arrow} alt="" />
          </div>
          <Link to={'/showitem/4'}><img className='watchimg' src={img4} alt="" /></Link>
        </div>
        <div className="watchshow2 border">
          <div className="watchshow22">
            <p>For Adventure</p>
            <img src={arrow} alt="" />
          </div>
          <Link to={'/adventure'} ><img className='watchimg'  src={img28} alt="" /></Link>
        </div>
      </div>
      <div className="bothh">
        <div className="watchshow2 border">
          <div className="watchshow22">
            <p>For Lifestyle</p>
            <img src={arrow} alt="" />
          </div>
          <Link to={'/lifestyle'} ><img className='watchimg'  src={img32} alt="" /></Link>
        </div>
        <div className="watchshow2 border">
          <div className="watchshow22">
            <p>For Productivity</p>
            <img src={arrow} alt="" />
          </div>
          <Link to={'/productivity'} ><img className='watchimg'  src={img21} alt="" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Watchshow