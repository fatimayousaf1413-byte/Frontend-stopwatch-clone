import React from 'react'
import './Popup.css'

const Popup = ({show}) => {
    if(!show) return null;
    return (
        <div>
            <div className="popup1">
                <div className="popup-content1">
                    <span className="checkmark">&#10004;</span>
                    <p>Order Completed Successfully!</p>
                </div>
            </div>
        </div>
    )
}

export default Popup