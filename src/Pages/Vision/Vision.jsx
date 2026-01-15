import React, { useEffect } from 'react'
import './Vision.css'
import Visionhead from '../../Components/Vision/Visionhead/Visionhead';

const Vision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Visionhead/>
    </div>
  )
}

export default Vision