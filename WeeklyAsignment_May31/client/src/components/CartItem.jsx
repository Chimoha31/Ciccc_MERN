import React from "react";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cartItem_container">
      <div>
        <ul className="item_title">
          <li>Detail</li>
          <li>Quantity</li>
          <li>Price</li>
        </ul>
      </div>
      <div className="items">
        <ul>
          <li className="item_details">
            <p>*Pug T-shirt</p>
            <img
              src="https://cdn.shopify.com/s/files/1/2253/9875/products/new-summer-french-bulldog-printed-t-shirt-women-cute-cartoon-t-shirt-pit-bull-tshirt-top-female-frances-german-shepherd-t-shirt--frenchie-world-shop-30020874207381.jpg?v=1619112230"
              alt="product_item"
            />
          </li>
          <li className="item_quantity">
            <div>
              <h5>-</h5>
              <p className="quantity">1</p>
              <h5>+</h5>
            </div>
          </li>
          <li className="item_total">
            <p>$20.00</p>
            <span>🗑</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartItem;
