import React from "react";
import "./CartSummary.scss";

const CartSummary = () => {
  return (
    <div className="cartSummary_container">
      <h1>Order Summary</h1>
      <div className="border">{/* border */}</div>
      <div>
        <ul>
          <li className="summary_preTotal">
            <p>PRE TOTAL</p>
            <p>$231.00</p>
          </li>
          <li className="summary_options">
            <p>-SHIPPING</p>
            <select>
              <option value="stardard">Standard Delivery - $5.00</option>
              <option value="fast">Fast Delivery - $10.00</option>
            </select>
          </li>
          <li className="summary_promo">
            <p>-PROMO CODE</p>
            <input type="text" placeholder="Enter your code" />
          </li>
          <li className="summary_apply">
            <button>APPLY</button>
          </li>
        </ul>
      </div>
      <div className="border">{/* border */}</div>
      <div className="summary_totalCost">
        <p>TOTAL COST</p>
        <p>$226.00</p>
      </div>
      <div className="summary_checkout">
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartSummary;
