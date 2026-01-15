import React, { useEffect } from 'react'
import Amold1 from '../Components/Allothers/Amold1/Amold1'

const Amoled = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Amold1/>
    </div>
  )
}

export default Amoled