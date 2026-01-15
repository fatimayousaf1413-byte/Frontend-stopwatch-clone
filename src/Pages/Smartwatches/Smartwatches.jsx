import React, { useEffect } from 'react'
import './Smartwatches.css'
import watch from '../../assets/watches.webp'
import Productdisplay from '../../Components/Allwatches/Product Display/Productdisplay'
import Textwatch from '../../Components/Allwatches/Textwatch/Textwatch'
import { Link } from 'react-router-dom'

const Smartwatches = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='watches' >
      <div className="image">
        <Link to={'/showitem/2'}  ><img src={watch} alt="" /></Link>
      </div>
      <div className="heading">
        <h2>SMART WATCHES</h2>
      </div>
    </div>
    <Productdisplay/>
    <Textwatch/>
    </>
  )
}

export default Smartwatches