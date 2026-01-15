import React from 'react'
import './Pic.css'
import img12 from '../../../assets/img12.webp'
import { Link } from 'react-router-dom'

const Pic = () => {
  return (
    <div className='pic' >
        <Link to={'/vision'} ><img src={img12} alt="" /></Link>
    </div>
  )
}

export default Pic