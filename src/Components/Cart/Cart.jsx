import React, { useEffect, useState } from 'react'
import './Cart.css'
import cart from '../../assets/blackcart.svg'
import cross from '../../assets/cross.svg'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../Context/Reducer'

const Cart = ({ setshowcart, setshowitem , selectedCatagory}) => {
  const products = useSelector(state => state.products.products)
  const cartItems = useSelector(state => state.products.cartItems)
  const [closing, setClosing] = useState(false);
  const [isclosing, setisclosing] = useState(false)
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setshowcart(false);
    }, 400);
  };
  const handleClosed = () => {
    setisclosing(true);
    setTimeout(() => {
      setshowitem(false);
    }, 400);
  };
  const cartProducts = products.filter((e) => (cartItems && cartItems[e.id]) > 0);


  return (
    <div
      className={`overlay ${closing, isclosing ? "closed" : mounted ? "open" : ""}`}
      onClick={handleClose}
    >
      <div className={`cart ${closing, isclosing ? "closed" : mounted ? "open" : ''}`}>
        <div className="cart-header">
          <div className="cart-header-img">
            <img src={cart} alt="" /><p>Cart</p>
          </div>
          <img onClick={() => { handleClose(); handleClosed() }} className='cross' src={cross} alt="" />
        </div> <hr />
        <>
          {cartProducts.length === 0 ? (
            <div className="cart-body">
              <p>Your cart is empty</p>
              <button>START SHOPPING</button>
            </div>
          ) : (
            <>
              <div className="cart-hide-body">
                <div className="cart-head">
                  <h4>You are eligible for free shipping!</h4>
                  <hr />
                </div>
              </div>
              {cartProducts.map((e) => {
                const quantity = cartItems[e.id];
                const product = cartProducts.find(item => item.id === e.id);
                const images = product.temp.reduce((acc, obj) => ({ ...acc, ...obj }), {});
                const selectedImageArray = images[selectedCatagory]; // e.g. images['image3']
                const fig1 = selectedImageArray?.find(fig => fig.fig1)?.fig1;
                // const fig1Url = getFig(product, selectedCatagory, "fig1");
                return (
                  <div className="cart-item" key={e.id}>
                    <div className="cart-item-img">
                      {fig1 ? (
                        <img src={fig1} alt="fig1" />
                      ) : (
                        <span>No image available</span>
                      )}
                      <div className="cart-item-text">
                        <h3>{e.name}</h3>
                        <p>Deep purple</p>
                        <div className="right-quantity1">
                          <span>
                            <div onClick={() => dispatch(decrement(e.id))} className='minus' >-</div>
                            <div>{cartItems[e.id]}</div>
                            <div onClick={() => dispatch(increment(e.id))} className='plus' >+</div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-price">
                      <h3>Rs.{e.price * quantity}</h3>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      </div>
    </div >
  )
}

export default Cart