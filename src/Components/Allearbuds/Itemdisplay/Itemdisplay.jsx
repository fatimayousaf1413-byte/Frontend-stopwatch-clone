import React from 'react'
import './Itemdisplay.css'
import Item from '../Item/Item'
import { useSelector } from 'react-redux'

const Itemdisplay = () => {
    const products = useSelector(state => state.products.products)
    const selectedItems = products.filter(item => Number(item.id) >= 21 && Number(item.id) <= 40)
    return (
        <div>
            <div className='products'>
                {selectedItems.map((item, index) => (
                    <div className="raaani" style={{}}>
                        <Item key={index} id={item.id} discription={item.discription} off={item.off} image1={item.image1} name={item.name} image={item.image} price={item.price} label={item.label} rating={item.rating}  color1={item.color1} color2={item.color2} color3={item.color3} img2={item.image2} img3={item.image3} img4={item.image4}  />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Itemdisplay