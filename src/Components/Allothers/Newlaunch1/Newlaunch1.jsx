import React from 'react'
import './Newlaunch1.css'
import { useSelector } from 'react-redux'
import imgamold from '../../../assets/imgnew.webp'
import Productitem from '../../Allwatches/Product Item/Productitem'
import Item from '../../Allearbuds/Item/Item'

const Newlaunch1 = () => {
  const products = useSelector(state => state.products.products)
  return (
    <div>
      <div className='watches' >
        <div className="image">
          <img src={imgamold} alt="" />
        </div>
        <div className="heading">
          <h2>New Launches</h2>
        </div>
      </div>
      <div className="products">
        {products.map((item, index) => (
          <Item
           key={index} image1={item.image1} id={item.id} discription={item.discription} off={item.off} name={item.name} image={item.image} price={item.price} label={item.label} rating={item.rating}  color1={item.color1} color2={item.color2} color3={item.color3} img2={item.image2} img3={item.image3} img4={item.image4} />
        ))}
      </div>
    </div>
  )
}

export default Newlaunch1