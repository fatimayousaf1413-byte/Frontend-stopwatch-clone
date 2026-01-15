import React, { useState } from 'react'
import './Navbar.css'
import main from '../../../assets/main.avif'
import search from '../../../assets/search.svg'
import cart from '../../../assets/cart.svg'
import { Link } from 'react-router-dom'
import Cart from '../../Cart/Cart'


const Navbar = () => {
    const [show, setshow] = useState(false)
    const [showitem, setshowitem] = useState(false);
    const myFunc = ()=>{
        let string = 'hello';
        return string
    }
    
    console.log(myFunc())

    return (
        <div className='okkk' >
            <div className='main' >
                <div className='logo' >
                    <Link to={'./'} style={{ textDecoration: 'none', color: 'white' }}  ><img src={main} alt="" /></Link>
                </div>
                <div className='links' >
                    <ul>
                        <li><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} >Home</Link><hr /></li>
                        <li><Link to={'./smart-watches'} style={{ textDecoration: 'none', color: 'white' }} > Smart Watches</Link><hr /></li>
                        <li><Link to={'./earbuds'} style={{ textDecoration: 'none', color: 'white' }} >Zero Earbuds</Link><hr /></li>
                        <li><Link to={'./vision'} style={{ textDecoration: 'none', color: 'white' }} >Vision 2025</Link><hr /></li>
                    </ul>
                </div>
                <div className='icons' >
                    <img src={search} alt="" /><img onClick={() => setshowitem(true)} src={cart} alt="" />
                    { showitem ? <Cart setshowitem={setshowitem} /> : '' }
                </div>
            </div>
        </div>
    )
}

export default Navbar