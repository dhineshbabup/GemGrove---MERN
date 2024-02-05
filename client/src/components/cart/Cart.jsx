import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import ShopContext from "../../context/Context";
const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    quantity,
    decreaseQuantity,
    increaseQuantity,
  } = useContext(ShopContext);
  let price = 0;
  let discount = 0;
  let total_price = 0;
  console.log(cartItems);
  // const [quantity, setQuantity] = useState(1);

  const calculateSubToatl = (qty, current_price) => {
    price += qty * current_price;
    return qty * current_price;
  };
  const calculateToatl = () => {
    return price >= 10000 ? price : price + 49;
  };
  // const increaseQuantity = () => {
  //   setQuantity((prev) => prev + 1);
  // };
  // const decreaseQuantity = () => {
  //   setQuantity((prev) => {
  //     console.log(prev);
  //     if (prev > 1) {
  //       return prev - 1;
  //     }
  //     return (prev = 1);
  //   });
  // };
  // useState(() => {

  // },[quantity])
  return (
    <div className={classes["cart"]}>
      {/* <img src={shop} alt="" /> */}
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
                  if (p.old_price) {
                    discount += p.old_price - p.current_price;
                    total_price += p.old_price;
                  } else {
                    total_price += p.current_price;
                  }
                  return (
                    <tr key={p._id}>
                      <td>
                        <img src={p.image} alt="" />
                      </td>
                      <td>{p.name}</td>
                      <td>{p.current_price}</td>
                      <td>
                        <button onClick={decreaseQuantity}>-</button>
                        {p.quantity}
                        <button onClick={increaseQuantity}>+</button>
                      </td>
                      <td>{calculateSubToatl(quantity, p.current_price)}</td>
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
            <h2>Bag Total</h2>
            <h2 className={classes["total"]}>{price}</h2>
          </div>
          <div>
            <h2>Total Product Price</h2>
            <h2>{total_price}</h2>
          </div>
          <div>
            <h2>Discount</h2>
            <h2 className={classes["discount"]}>{discount}</h2>
          </div>
          <div>
            <h2>Delivery Fee</h2>
            <h2>49</h2>
          </div>
          <div>
            <h2>Order Total</h2>
            <h2>{calculateToatl()}</h2>
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
