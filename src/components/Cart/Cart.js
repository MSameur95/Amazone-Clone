import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    } 

    let shipping = 0;
    if (total > 15){
        shipping = 4.99;
    }else if(total > 40 ){
        shipping = 0;
    }else if(total < 15){
        shipping = 10
    }

    const tax = Math.round(total/10);
    const grandTotal = (total + shipping + tax).toFixed(2)

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p><small>Tax + Vat: {tax} </small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;