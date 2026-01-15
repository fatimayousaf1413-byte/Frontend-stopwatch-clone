import React from 'react'
import './Amold1.css'
import imgamold from '../../../assets/imgamoled.webp'
import { useSelector } from 'react-redux'
import Productitem from '../../Allwatches/Product Item/Productitem'

const Amold1 = () => {
  const products = useSelector(state => state.products.products)
  const filter = products.filter(item => ['5', '10', '3', '7', '1', '12', '18', '14', '4', '19', '16', '2', '20', '9'].includes(item.id))
  return (
    <div>
      <div className='watches' >
        <div className="image">
          <img src={imgamold} alt="" />
        </div>
        <div className="heading">
          <h2>Amoled Smart Watches</h2>
        </div>
      </div>
      <div className="products">
        {/* {filter.map((item, index) => (
          <Productitem key={index} image1={item.image1} id={item.id} discription={item.discription} off={item.off} name={item.name} image={item.image} price={item.price} label={item.label} rating={item.rating} />
        ))} */}
      </div>
    </div>
  )
}

export default Amold1