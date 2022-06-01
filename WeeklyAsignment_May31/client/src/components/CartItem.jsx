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
            <img src="https://cdn.shopify.com/s/files/1/2253/9875/products/new-summer-french-bulldog-printed-t-shirt-women-cute-cartoon-t-shirt-pit-bull-tshirt-top-female-frances-german-shepherd-t-shirt--frenchie-world-shop-30020874207381.jpg?v=1619112230" alt="product_item" />
            <p>French Pug T-shirt</p>
          </li>
          <li>1</li>
          <li>$20.00</li>
        </ul>
      </div>
    </div>
  );
};

export default CartItem;
