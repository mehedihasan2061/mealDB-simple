import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
  console.log(cart)
    return (
      <div className="cart-info">
        <div className="cart-text">
          <h2>Order Summary </h2>
          <h4>Selected Item: {cart.length}</h4>
          
        </div>
      </div>
    );
};

export default Cart;