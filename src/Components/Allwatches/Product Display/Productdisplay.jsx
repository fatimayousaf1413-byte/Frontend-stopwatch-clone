import React from 'react'
import './Productdisplay.css'
import { useSelector } from 'react-redux'
import Productitem from '../Product Item/Productitem'
import Item from '../../Allearbuds/Item/Item'

const Productdisplay = () => {
  const products = useSelector(state => state.products.products)
  const selectedItem = products.filter(item => Number(item.id) >= 1 && Number(item.id) <= 20)

  return (
    <div className='products'>
       {selectedItem.map((item, index) => (
                    <div className="raaani" style={{}}>
                        <Item key={index} id={item.id} discription={item.discription} off={item.off} image1={item.image1} name={item.name} image={item.image} price={item.price} label={item.label} rating={item.rating}  color1={item.color1} color2={item.color2} color3={item.color3} img2={item.image2} img3={item.image3} img4={item.image4}  />
                    </div>
                ))}
      {/* {selectedItem.map((item, index) => (
        <Productitem key={index} id={item.id} discription={item.discription} image1={item.image1} off={item.off} name={item.name} image={item.image} price={item.price} label={item.label} rating={item.rating} color1={item.color1} color2={item.color2} color3={item.color3} img2={item.image2} img3={item.image3} img4={item.image4} />
      ))} */}
    </div>
  )
}

export default Productdisplay