import React, { useContext, useState, useEffect } from "react";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import ShopContext from "../../context/Context";
import axios from "axios";
const Cart = () => {
  const { cartItems, removeFromCart, setCartItems, addToCart } =
    useContext(ShopContext);
  const { cookie } = useContext(ShopContext);
  let price = 0;
  let discount = Number(0);
  let total_price = 0;
  const increaseQuantity = (id, Newquantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Newquantity } : item
      )
    );
  };
  const calculateSubToatl = (quantity, price) => {
    const sub = Number(price * quantity).toFixed(2);
    total_price += Number(sub);
    return sub;
  };
  const calculateTotal = (total, del) => {
    return (total + del).toFixed(2);
  };

  const calculateDiscount = (old_price, curr_price) => {
    if (!old_price || !curr_price) return;
    discount = Number(old_price - curr_price);
  };
  useEffect(() => {
  const addcart = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/addtocart",
        { cart: cartItems },
        {
          headers: {
            key: cookie.key,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  addcart();
}, [cartItems, cookie.key]);

  return (
    <div className={classes["cart"]}>
      <div className={classes["cart-left"]}>
        <h2>Shopping cart</h2>
        <div className={classes["cart-left-table"]}>
          <table>
            <tr>
              <th colSpan={2} className={classes["product-column"]}>
                Product
              </th>
              <th>Price</th>
              <th>Qty</th>
              <th>Sub Total</th>
              <th>Remove</th>
            </tr>
            {cartItems && (
              <tbody>
                {cartItems.map((p) => {
                  calculateDiscount(p.old_price, p.curr_price);
                  if (p.old_price) {
                    discount += p.old_price - p.curr_price;
                  }
                  return (
                    <tr key={p.id}>
                      <td>
                        <img src={p.img} alt="" />
                      </td>
                      <td>{p.name}</td>
                      <td>{p.curr_price}</td>
                      <td>
                        <button
                          onClick={() =>
                            p.quantity === 1
                              ? 1
                              : increaseQuantity(p.id, p.quantity - 1)
                          }
                        >
                          -
                        </button>
                        {p.quantity}
                        <button
                          onClick={() => increaseQuantity(p.id, p.quantity + 1)}
                        >
                          +
                        </button>
                      </td>
                      <td>{calculateSubToatl(p.quantity, p.curr_price)}</td>
                      <td onClick={() => removeFromCart(p.id)}>
                        <VscClose className={classes["mark"]} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <div className={classes["cart-right"]}>
        <div className={classes["cart-right-order"]}>
          <p>Order details</p>
          <div>
            <h2>Total Product Price</h2>
            <h2>{total_price.toFixed(2)}</h2>
          </div>
          <div>
            <h2>Discount</h2>
            <h2 className={classes["discount"]}>{discount.toFixed(2)}</h2>
          </div>
          <div>
            <h2>Delivery Fee</h2>
            <h2>{price >= 1000 ? "Free" : 49}</h2>
          </div>
          <div>
            <h2>Order Total</h2>
            <h2>
              {" "}
              &#8377; {calculateTotal(total_price, price >= 1000 ? 49 : 0)}
            </h2>
          </div>
          <button>Buy Now</button>
        </div>
        <div className={classes["cart-right-coupen"]}>
          <h2>Apply Coupon</h2>
          <input type="text" />
          <span>*Invalid</span>
          <button>Sumbit</button>
        </div>
        <div className={classes["cart-right-return"]}>
          <h2>Return/Refund Policy</h2>
          <p>
            In case of return, we ensure quick refunds. Full amount will be
            refunded excluding Convenience Fee
          </p>
          <Link className={classes["link"]}>Read Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
