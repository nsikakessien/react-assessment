import React from 'react'

const Features = () => {
    return (
        <div className="feature-section">
            <ul>
                <li>
                    <i className="far fa-file-alt"></i>
                    <p>Product Categories</p>
                </li>
                <li>
                    <i className="fas fa-fire-alt"></i>
                    <p>Popular Products</p>
                </li>
                <li>
                    <i className="far fa-thumbs-up"></i>
                    <p>Recommended Products</p>
                </li>
                <li>
                    <i className="fas fa-store"></i>
                    <p><span className="feature-span">Shops</span></p>
                </li>
            </ul>
        </div>
    )
}

export default Features
