import React, { useEffect } from 'react'
import Item from '../../Components/Allearbuds/Item/Item'
import { useSelector } from 'react-redux'
import img from '../../assets/productivity.webp'

const Productivity = () => {
    const products = useSelector(state => state.products.products)
    const selectedItems = products.filter(item => ['39', '3', '4'].includes(item.id))
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <div className='watches' >
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="heading">
          <h2> Productivity </h2>
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

export default Productivity