import React, { useState } from 'react';
import './Shop.css';
import '../../fakeData';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first15 = fakeData.slice(5,20);
    const [products, setProducts] = useState(first15);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        
        <div className='shop-container'>
            <div className="product-container">
                <h3>
                    <ul>
                        {
                            products.map(pd => 
                            <Product
                                handleAddProduct = {handleAddProduct}
                                product = {pd}>
                            </Product>) 
                        }
                    </ul>
                </h3>
            </div>

            <div className="cart-container">
               <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;