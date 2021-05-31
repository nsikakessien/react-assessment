import React from 'react'

const TopMenu = () => {
    return (
        <div className="top-menu">
            <ul>
                <li className="lagos">
                    <i className="fas fa-map-marker-alt" ></i>
                    <a href="#">Lagos</a>
                    <i className="fas fa-angle-down"></i>
                    <div className = "vertical"></div>
                </li>
                <li className="order">
                    <i className="fas fa-file-invoice"></i>
                    <a href="#">My Orders</a>
                    <div className = "vertical-1"></div>
                </li>
                <li className="cart">
                    <i data-count="9" className="fas fa-shopping-cart badge"></i>
                    <a href="#">Cart</a>
                </li>
            </ul>
        </div>
    )
}

export default TopMenu
