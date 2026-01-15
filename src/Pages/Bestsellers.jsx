import React, { useEffect } from 'react'
import Bestsellers1 from '../Components/Allothers/Bestsellers1/Bestsellers1'

const Bestsellers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Bestsellers1/>
    </div>
  )
}

export default Bestsellers