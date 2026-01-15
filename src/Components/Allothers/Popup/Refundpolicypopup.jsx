import React from 'react'
import './Refundpolicypopup.css'

const Refundpolicypopup = ({ show, onClose }) => {
    if (!show) return null;
    return (
        <div>
            <div className="popup">
                <div className="popup-content">
                    <div className="popup-both">
                        <h2>Refund policy</h2>
                        <span className='close-btn' onClick={onClose} >&times;</span>
                    </div>
                    <h5>SHIPPING & RETURN POLICY</h5>
                    <p>Our goal is to give you a wonderful experience with our products and service. We go to all lengths to make deliveries stress-free for our clients. <br /> <br />

                        Please read the policy to know more about our shipping and returns. <br />

                        SHIPPING DETAILS</p>
                    <ul className='popup-ul' >
                        <li>
                            Every order placed on www.zerolifestyle.co will be shipped to a single address listed at the time of order. Please place separate orders if you wish to receive your orders at multiple addresses.
                        </li><br />

                        <li>
                            We deliver our products through reliable courier partners. Our courier partners may change later.
                        </li><br />

                        <li>
                            Your order will be shipped within 3-5 working days. Orders may take longer to deliver during sales.
                        </li><br />

                        <li>
                            Orders placed on Sunday will be processed on Monday.
                        </li><br />

                        <li>
                            We ship all items in a single order. In case of availability issues, your order may be dispatched separately.
                        </li><br />

                        <li>
                            You will receive the order invoice with your order. Please email us at <a href="mailto:support@zerolifestyle.co">support@zerolifestyle.co</a> if you don’t receive the invoice.
                        </li><br />

                        <li>
                            Once you have successfully placed an order with Zero, you will receive an order confirmation email.
                        </li><br />

                        <li>
                            You will receive an email from Zero when your order is shipped with a tracking ID.
                        </li><br />

                        <li>
                            You can choose to pay online or select cash on delivery. Our online payment is 100% secure.
                        </li><br />

                        <li>
                            If you receive a damaged product, please file a complaint with your Order # and product photos within 24 hours of receiving the order.
                        </li><br />
                    </ul>

                    <p>Refund & Replacement</p>
                    <ul className='popup-ul' >
                        <li>
                            We will initiate a refund or replacement for you if you have filed a request within 24 hours of receiving the product.
                        </li><br />

                        <li>
                            You will be eligible for a refund or replacement under the following conditions:
                            <ul>
                                <li>If you didn’t receive the product on time. You will be refunded the full amount within 14 working days.</li><br />
                                <li>If you received an incorrect product.</li><br />
                                <li>If you received the wrong product.</li><br />
                            </ul>
                        </li><br />

                        <li>
                            Zero will arrange for a reverse pickup after complete verification of the issue. The cost of any missing items will be paid by the customer in advance before the refund or replacement is initiated from Zero’s end.
                        </li><br />

                        <li>
                            Note: Refund or replacement is not applicable in case of a change of mind.
                        </li><br />
                    </ul>

                    <p>Cancellation Policy</p>
                    <p>You can cancel your order before it is dispatched. <br /> <br />

                        Please email us at support@zerolifestyle.co for order cancellation.</p>

                </div>
            </div>
        </div>
    )
}

export default Refundpolicypopup