import React from 'react'
import './Homeear.css'
import { useSelector } from 'react-redux'
import Item from '../../Allearbuds/Item/Item'

const Homeear = () => {
    const products = useSelector(state => state.products.products)
    const selectedItems = products.filter(item => ['21', '22', '23', '28'].includes(item.id))
    return (
        <div>
            <div className='products' >
                {selectedItems.map((item, index) => (
                    <div className="raaani" style={{}}>
                    <Item key={index} id={item.id} discription={item.discription} off={item.off} image1={item.image1} name={item.name} image={item.image} price={item.price} label={item.label} rating={item.rating}  color1={item.color1} color2={item.color2} color3={item.color3} img2={item.image2} img3={item.image3} img4={item.image4}  />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Homeear