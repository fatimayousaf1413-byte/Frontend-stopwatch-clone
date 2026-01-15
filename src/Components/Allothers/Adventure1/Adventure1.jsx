import React, { useEffect } from 'react'
import './Adventure1.css'
import Item from '../../Allearbuds/Item/Item'
import { useSelector } from 'react-redux'

const Adventure1 = () => {
  const products = useSelector(state => state.products.products)
  const selectedItems = products.filter(item => ['2', '3', '4', '31', '19', '37', '40', '21',].includes(item.id))
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div>
      <div className='watches' >
        <div className="heading">
          <h2> Adventure </h2>
        </div>
      </div>
      <div className="products">
        {selectedItems.map((item, index) => (
          <Item key={index} image1={item.image1} id={item.id} discription={item.discription} off={item.off} name={item.name} image={item.image} price={item.price} label={item.label} rating={item.rating} color1={item.color1} color2={item.color2} color3={item.color3} img2={item.image2} img3={item.image3} img4={item.image4} />
        ))}
      </div>
    </div>
  )
}

export default Adventure1