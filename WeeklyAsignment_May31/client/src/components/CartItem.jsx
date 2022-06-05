import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "./CartItem.scss";
import axiox from "axios";

const CartItem = () => {
  // const [itemName, setItemName] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [price, setPrice] = useState("");
  // const [image, setImage] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleGetItems = async () => {
    await axiox
      .get("http://localhost:5000/api/v1/items")
      .then((res) => {
        // alert(res.message);
        setItemsList(res.data.data);
        console.log(itemsList);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  return (
    <Fragment>
      <div className="cartItem_container">
        <h1>Shopping Cart</h1>
        <div className="border">{/* border */}</div>
        <div>
          <ul className="item_title">
            <li>Detail</li>
            <li>Quantity</li>
            <li>Price</li>
          </ul>
        </div>

        {itemsList.map((item) => (
          <div className="items" key={item._id}>
            <ul>
              <li className="item_details">
                <img
                  src={item.image}
                  alt="product_item"
                />
                <p className="item_name">*{item.itemName}</p>
              </li>
              <li className="item_quantity">
                <div>
                  <h5>−</h5>
                  <input type="number" placeholder="1" className="quantity" />
                  <h5>+</h5>
                </div>
              </li>
              <li className="item_total">
                <p>{item.price}</p>
                <span>🗑</span>
              </li>
            </ul>
          </div>
        ))}

        <div className="continue">
          <p>←Continue Shopping</p>
          <button onClick={handleGetItems}>Refresh</button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
