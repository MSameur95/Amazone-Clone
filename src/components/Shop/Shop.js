import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,10);

    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                products.map(pd => <Product
                    handleAddProduct = {handleAddProduct}
                    product = {pd}>
                    </Product>) 
                }

            </div>
            <div className="cart-container">
                <h1>This is cart</h1>
                <h5>Order summary: {cart.length}</h5>
            </div>
        </div>

    );
};

export default Shop;