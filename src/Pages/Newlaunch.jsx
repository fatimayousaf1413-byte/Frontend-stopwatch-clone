import React, { useEffect } from 'react'
import Newlaunch1 from '../Components/Allothers/Newlaunch1/Newlaunch1'

const Newlaunch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Newlaunch1/>
    </div>
  )
}

export default Newlaunch