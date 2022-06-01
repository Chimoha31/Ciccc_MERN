import React from "react";
import { Fragment } from "react";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <Fragment>
      <div className="cartItem_container">
        <h1>Shopping Cart</h1>
        <div className="border">
         {/* border */}
        </div>
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
              <img
                src="https://cdn.shopify.com/s/files/1/2253/9875/products/new-summer-french-bulldog-printed-t-shirt-women-cute-cartoon-t-shirt-pit-bull-tshirt-top-female-frances-german-shepherd-t-shirt--frenchie-world-shop-30020874207381.jpg?v=1619112230"
                alt="product_item"
              />
              <p className="item_name">*Pug T-shirt</p>
            </li>
            <li className="item_quantity">
              <div>
                <h5>−</h5>
                <input type="number" placeholder="1" className="quantity" />
                <h5>+</h5>
              </div>
            </li>
            <li className="item_total">
              <p>$20.00</p>
              <span>🗑</span>
            </li>
          </ul>
          {/* <div className="continue">
            <p>←Continue Shopping</p>
          </div> */}
        </div>

        {/* Delete from here */}
        <div className="items">
          <ul>
            <li className="item_details">
              <img
                src="https://www.byrdie.com/thmb/22MtiF7yz8Eqv9DJoA4hp7D1VTQ=/1080x810/filters:fill(auto,1)/179765291_593484545376956_4422170819335722433_n-df45c597014d44a7b715330da7e75685.jpg"
                alt=""
              />
              <p>*Foundation</p>
            </li>
            <li className="item_quantity">
              <div>
                <h5>−</h5>
                <input type="number" placeholder="1" className="quantity" />
                <h5>+</h5>
              </div>
            </li>
            <li className="item_total">
              <p>$55.00</p>
              <span>🗑</span>
            </li>
          </ul>
        </div>
        <div className="items">
          <ul>
            <li className="item_details">
              <img
                src="https://images.ctfassets.net/u4vv676b8z52/4bXMvxB6k8WwyEWSgya9uI/33af104c3b49bcb9cdc465428476586f/Hero-Images-Rihanna.jpg?fm=jpg&q=80"
                alt="product_item"
              />
              <p>*Sanglasses</p>
            </li>
            <li className="item_quantity">
              <div>
                <h5>−</h5>
                <input type="number" placeholder="1" className="quantity" />
                <h5>+</h5>
              </div>
            </li>
            <li className="item_total">
              <p>$140.00</p>
              <span>🗑</span>
            </li>
          </ul>
        </div>
        <div className="continue">
          <p>←Continue Shopping</p>
        </div>
        {/* Delete to here */}
      </div>
    </Fragment>
  );
};

export default CartItem;
