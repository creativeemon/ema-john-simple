import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    console.log(cart)

    let priceTotal = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // shot cat
        // product.quantity = product.quantity || 1;
        priceTotal = priceTotal + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = priceTotal*7/100;
    const grandTotal = priceTotal + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Oder Summary</h4>
            <p>Selected Items:{quantity}</p>
            <p>Total Price:${priceTotal}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>tax:{tax.toFixed(2)}</p>
            <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;