import React, { useEffect } from 'react'
import './Earbuds.css'
import watch from '../../assets/watches.webp'
import Itemdisplay from '../../Components/Allearbuds/Itemdisplay/Itemdisplay'
import Earbudstext from '../../Components/Allearbuds/Earbudstext/Earbudstext'
import { Link } from 'react-router-dom'

const Earbuds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className='watches' >
        <div className="image">
        <Link to={'/showitem/22'}  ><img src={watch} alt="" /></Link>
        </div>
        <div className="heading">
          <h2>ZERO EARBUDS PRICE IN PAKISTAN: INSANE 72% OFF TRUE WIRELESS EARBUDS!</h2>
        </div>
      </div>
      <Itemdisplay/>
      <Earbudstext/>
    </div>
  )
}

export default Earbuds