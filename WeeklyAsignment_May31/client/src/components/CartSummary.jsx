import React from "react";
import "./CartSummary.scss";

const CartSummary = () => {
  return (
    <div className="cartSummary_container">
      <h1>Order Summary</h1>
      <div className="border">{/* border */}</div>
      <div>
        <ul>
          <li>
            <p>PRE TOTAL</p>
            <p>$215.00</p>
          </li>
          <li>
            <p>SHIPPING</p>
            <select>
              <option value="stardard">Standard Delivery - $5.00</option>
              <option value="fast">Fast Delivery - $10.00</option>
            </select>
          </li>
          <li>
            <p>PROMO CODE</p>
            <input type="text" placeholder="Enter your code" />
          </li>
          <li>
            <button>APPLY</button>
          </li>
        </ul>
      </div>
      <div className="border">{/* border */}</div>
      <div>
        <p>TOTAL COST</p>
        <p>$220.00</p>
      </div>
      <div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartSummary;
