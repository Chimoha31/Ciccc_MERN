import React from "react";

const CartItem = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>PRODUCT DETAILS</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>TOTAL</th>
          </tr>
          <tr>
            <td>
              <ul>
                <div>
                  <li>
                    <img src="" alt="shopping_item" />
                  </li>
                </div>
                <div>
                  <li>
                    <p>Shopping item name</p>
                  </li>
                  <li>
                    <p>Remove</p>
                  </li>
                </div>
              </ul>
            </td>
            <td>1</td>
            <td>$35.60</td>
            <td>$35.60</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
