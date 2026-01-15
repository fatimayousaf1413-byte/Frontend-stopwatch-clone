import React, { useEffect, useRef, useState } from 'react'
import './Buynow1.css'
import { useLocation, useParams } from 'react-router-dom'
import main from './../../../assets/copymain.png'
import Popup from '../Popup/Popup'
import Refundpolicypopup from '../Popup/Refundpolicypopup'
import Contactpopup from '../Popup/Contactpopup'
import { useSelector } from 'react-redux'
import Alert from '@mui/material/Alert';


const Buynow1 = () => {
    const { id } = useParams()
    const products = useSelector(state => state.products.products)
    const product = products.find(item => item.id === id)
    const quantity = useSelector(state => state.products.quantity)
    const [showSuccess, setShowSuccess] = useState(false);
    const [showrefundpopup, setshowrefundpopup] = useState(false)
    const [showcontat, setshowcontact] = useState(false);
    const location = useLocation();
    const { imageUrl } = location.state || {};
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false)
        }, 2000);
    };
    const handleSubmitAlert = (e) => {
        e.preventDefault();
        setShowSuccessAlert(true);
        setTimeout(()=>{
            setShowSuccessAlert(false)
        }, 3000)
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='buynow-body' >
            <div className="buynow-header">
                <img src={main} alt="" />
                <hr />
            </div>
            <div className="buynow-main">
                <div className="buynow-main-left">
                    <h3>Contact</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="email" className='email' placeholder='Email' required />
                        <div className='checkbox' ><input type="checkbox" required /><p>Email me with news and offers</p></div>
                        <h3>Delivery</h3>
                        <div className="left-label">
                            <label htmlFor="Select0"><span>Country/Region</span></label>
                            <select className='country' name="country" >
                                <option value="">Pakistan</option>
                                <option value="usa">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="canada">Canada</option>
                                <option value="india">India</option>
                                <option value="australia">Australia</option>
                                <option value="germany">Germany</option>
                            </select>
                        </div>
                        <input type="text" className='left-name' placeholder='First Name' required />
                        <input type="text" className='left-name' placeholder='Last Name' required />
                        <input type="text" className='adress' placeholder='Adress' required /><span className='left-spaan' >Add complete adress and nearst landmark(Atleast 12 words)</span>
                        <input type="text" className='left-name' placeholder='City' required />
                        <input type="text" className='left-name' placeholder='Postal code(optional)' required />
                        <input type="number" className='phone' placeholder='Phone' />
                        <div className="checkbox"><input type="checkbox" required /><p>Save this information for next time</p></div>
                        <h3>Shipping Method</h3>
                        <div className="free-delivery-wrapper">
                            <div>
                                <h4 className="free-delivery-heading">
                                    <div className="free-delivery-label-wrapper"><p className="free-delivery-label">Free Delivery</p></div>
                                </h4>
                            </div>
                            <div>
                                <strong className="free-delivery-price">FREE</strong>
                            </div>
                        </div>
                        <div className="payment">
                            <h3>Payment</h3>
                            <p>All transactions are scure and encrypted.</p>
                        </div>
                        <div className="payment-container">
                            <div className="payment-section">
                                <div className="payment-option-wrapper">
                                    <div className="payment-option payment-option1">
                                        <div className="radio-wrapper"><input type="radio" id="cod" name="payment" className="radio-input" data-gtm-form-interact-field-id="1" /></div>
                                        <label htmlFor="cod" data-option-selected="true" className="payment-label"><span className="payment-text">Cash on Delivery (COD)</span></label>
                                    </div>
                                </div>
                                <div className="payment-option-wrapper">
                                    <div className="payment-option">
                                        <div className="radio-wrapper">
                                            <input type="radio" id="payfast" name="payment" className="radio-input" data-gtm-form-interact-field-id="0" />
                                        </div>
                                        <label htmlFor="payfast" data-option-selected="false" className="payment-label"><span className="payment-text">PAYFAST (Pay via Debit/Credit/Wallet/Bank Account)</span></label>
                                        <div className="card-icons-wrapper">
                                            <img alt="visa" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg" role="img" width="38" height="24" className="card-icon" />
                                            <img alt="master" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg" role="img" width="38" height="24" className="card-icon" />
                                            <img alt="unionpay" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/unionpay.8M-Boq_z.svg" role="img" width="38" height="24" className="card-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="payment">
                            <h3>Billing Adress</h3>
                        </div>
                        <div className="payment-container">
                            <div className="payment-section">
                                <div className="payment-option-wrapper">
                                    <div className="payment-option payment-option1">
                                        <div className="radio-wrapper"><input type="radio" id="cod" name="payment1" className="radio-input" data-gtm-form-interact-field-id="1" /></div>
                                        <label htmlFor="cod" data-option-selected="true" className="payment-label"><span className="payment-text">Same as shiping adress</span></label>
                                    </div>
                                </div>
                                <div className="payment-option-wrapper">
                                    <div className="payment-option">
                                        <div className="radio-wrapper">
                                            <input type="radio" id="payfast" name="payment1" className="radio-input" data-gtm-form-interact-field-id="0" />
                                        </div>
                                        <label htmlFor="payfast" data-option-selected="false" className="payment-label"><span className="payment-text">Use a different billing adress</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button aria-busy="false" aria-live="polite" id="checkout-pay-button" type="submit" className="checkout-button">
                            <span className="checkout-button-wrapper"><span className="checkout-button-text">Complete order</span></span>
                        </button>
                    </form>
                    <hr />
                    <div className="policy-wrapper">
                        <div className="policy-inner">
                            <ul className="policy-list">
                                <li onClick={() => setshowrefundpopup(true)} className="policy-item">Refund policy</li>
                                <li onClick={() => setshowrefundpopup(true)} className="policy-item">Shipping policy</li>
                                <li onClick={() => setshowrefundpopup(true)} className="policy-item">Privacy policy</li>
                                <li onClick={() => setshowrefundpopup(true)} className="policy-item">Terms of service</li>
                                <li onClick={() => setshowcontact(true)} className="policy-item">Contact information</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="buynow-main-right">
                    <div className="product-row">
                        <div className="product-quantity">{quantity}</div>
                        <div className="product-cell image-cell">
                            <div className="product-image-wrapper">
                                <img src={imageUrl} alt="" className="product-image" />
                            </div>
                        </div>

                        <div className="product-cell title-cell">
                            <div className="product-details">
                                <p className="product-title">{product.name}</p>
                                <div className="product-color">
                                    <p className="product-color-name">Deep Purple</p>
                                </div>
                            </div>
                        </div>
                        <div className="product-cell price-cell">
                            <div className="product-price">
                                <span translate="no" className="price-value notranslate">Rs.{product.price * quantity}.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="discount-code-wrapper">
                        <div className="discount-wrapper">
                            <form action="" className='formsubmitted' onSubmit={handleSubmitAlert} >
                                <div className="discount-container">
                                    <div className="input-group">
                                        <div className="input-wrapper">
                                            <input id="ReductionsInput0" name="reductions" type="text" placeholder="Discount code" autoComplete="on" aria-labelledby="ReductionsInput0-label" className="discount-input"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {showSuccessAlert && (
                                    <Alert variant="filled" severity="success" style={{ position: 'fixed', color:'white', top: 20, right: 20, zIndex: 1000 }}>
                                         Discount code applied successfully!
                                    </Alert>
                                )}
                                <button type="submit" aria-label="Apply Discount Code" aria-busy="false" aria-live="polite" className="apply-button">
                                    <span className="apply-button-text">Apply</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="subtotals">
                        <div className="subtotals-price">
                            <p>Subtotals</p>
                            <p>Rs.{product.price * quantity}.00</p>
                        </div>
                        <div className="subtotals-shipping">
                            <p>Shipping</p>
                            <p>FREE</p>
                        </div>
                        <div className="subtotals-total">
                            <p>Total</p>
                            <p>Rs.{product.price * quantity}.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <Popup show={showSuccess} />
            <Refundpolicypopup show={showrefundpopup} onClose={() => setshowrefundpopup(false)} />
            <Contactpopup show={showcontat} onClose={() => setshowcontact(false)} />
        </div>
    )
}

export default Buynow1