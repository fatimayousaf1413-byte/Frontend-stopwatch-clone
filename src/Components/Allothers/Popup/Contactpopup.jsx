import React from 'react'
import './Contactpopup.css'

const Contactpopup = ({ show, onClose }) => {
    if (!show) return null
    return (
        <div>
            <div className="popup2">
                <div className="popup-content2">
                    <div className="popup-both1">
                        <h2>Contact Information</h2>
                        <span className='close-btn' onClick={onClose} >&times;</span>
                    </div>
                    <p>Whatsapp <br />
                        0332 000 ZERO (9376) <br /> <br />

                        Email <br />
                        customer@zerolifestyle.co</p>
                </div>
            </div>
        </div>
    )
}

export default Contactpopup