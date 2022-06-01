import React from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart_container">
      <CartItem />
      <CartSummary  />
    </div>
  )
}

export default Cart
