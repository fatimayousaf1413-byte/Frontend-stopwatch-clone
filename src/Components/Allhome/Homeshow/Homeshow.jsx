import React from 'react'
import './Homeshow.css'
import { useSelector } from 'react-redux'
import Productitem from '../../Allwatches/Product Item/Productitem'
import Item from '../../Allearbuds/Item/Item'

const Homeshow = () => {
  const products = useSelector(state => state.products.products)
  const selectedItems = products.filter(item => ['1', '2', '3', '4'].includes(item.id))
  return (
    <div className='products' >
      {selectedItems.map((item, index) => (
        <Item key={index} id={item.id} discription={item.discription} image1={item.image1} off={item.off} name={item.name} image={item.image} price={item.price} label={item.label} rating={item.rating} color1={item.color1} color2={item.color2} color3={item.color3} img2={item.image2} img3={item.image3} img4={item.image4}  />
      ))}
    </div>
  )
}

export default Homeshow