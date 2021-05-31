import React from 'react'

const Fixed = () => {
    return (
        <div className="fixed-menu">
            <div className="fixed">
                <i className="fas fa-home"></i>
                <p>Home</p>
            </div>
            <div className="fixed">
                <i className="fas fa-cart-arrow-down"></i>
                <p className="blue">Buy</p>
            </div>
            <div className="fixed">
                <i className="fas fa-tag"></i>
                <p>Deals</p>
            </div>
            <div className="fixed">
                <i className="fas fa-wallet"></i>
                <p>Wallet</p>
            </div>
            <div className="fixed">
                <i className="fas fa-bars"></i>
                <p>More</p>
            </div>
        </div>
    )
}

export default Fixed;