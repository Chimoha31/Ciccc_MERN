import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart_container">
      <div className="cartItem">
        <CartItem />
      </div>
      <div className="cartSummary">
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
