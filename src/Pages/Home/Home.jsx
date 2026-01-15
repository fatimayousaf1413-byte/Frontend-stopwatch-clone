import React, { useEffect } from 'react'
import './Home.css'
import Body from '../../Components/Allhome/Body/Body'
import Box from '../../Components/Allhome/Box/Box'
import Line from '../../Components/Allhome/Line/Line'
import Other from '../../Components/Allhome/Other/Other'
import Pic from '../../Components/Allhome/Pic/Pic'
import Text from '../../Components/Allhome/Text/Text'
import Productdisplay from '../../Components/Allwatches/Product Display/Productdisplay'
import { useSelector } from 'react-redux'
import Homeshow from '../../Components/Allhome/Homeshow/Homeshow'
import Watchshow from '../../Components/Allhome/Watchshow/Watchshow'
import Earbudsshow from '../../Components/Allhome/Earbudsshow/Earbudsshow'
import Homeear from '../../Components/Allhome/Homeearbuds/Homeear'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const products = useSelector(state => state.products.products)
    const selectedItems = products.filter(item => ['1','2', '3', '4'].includes(item.id))
    return (
        <div className='Home'>
            <Body />
            <Box />
            <Line />
            <Homeear/>
            <Other/>
            <Homeshow/>
            <Watchshow/>
            <Pic/>
            <Earbudsshow/>
            <Text/>
        </div>
    )
}

export default Home