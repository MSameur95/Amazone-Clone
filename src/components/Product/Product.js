import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;

    return (
        <div className='product'>
            <div className="">
                <img src={img} alt="" />
            </div>

            <div className="product-text">
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in the stock - Order soon.</small></p>
                <button className='main-button' onClick = {() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>

        </div>
    );
};

export default Product;