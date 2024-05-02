import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h5>{name}</h5>
                <p><small>by:</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="main-button" onClick={() =>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>


        </div>


    );
};

export default Product;