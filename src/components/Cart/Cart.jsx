import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    console.log(cart)

    let priceTotal = 0;
    let totalShipping = 0;

    for(const product of cart){
        priceTotal = priceTotal + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = priceTotal*7/100;
    const grandTotal = priceTotal + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Oder Summary</h4>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price:${priceTotal}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>tax:{tax.toFixed(2)}</p>
            <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;