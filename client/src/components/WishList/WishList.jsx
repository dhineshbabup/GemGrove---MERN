import React, { useContext } from "react";
import classes from "./WishList.module.css";
import { VscClose } from "react-icons/vsc";
import ShopContext from "../../context/Context";
const WishList = () => {
  const { wishList, removeFromWishList, addToCart } = useContext(ShopContext);
  return (
    <div className={classes["wishlist"]}>
      <div className={classes["wishlist-head"]}>
        <h2>My WishList</h2>
      </div>
      <table>
        <tr>
          <th className={classes["wishlist-product"]}>Product</th>
          <th>Unit Price</th>
          <th>Stock Status</th>
        </tr>
        {wishList &&
          wishList.map((pr) => {
            return (
              <tr>
                <td className={classes["wish-img"]}>
                  <img src={pr.image} alt="" />
                  <p>{pr.name}</p>
                </td>
                <td className={classes["price"]}>{pr.current_price}</td>
                <td>
                  <span>{pr.stock}</span>
                </td>
                <td>
                  <button
                    onClick={() => {
                      removeFromWishList(pr.id);
                      addToCart(pr);
                    }}
                  >
                    Add to cart
                  </button>
                </td>
                <td>
                  <VscClose
                    onClick={() => removeFromWishList(pr.id)}
                    className={classes["mark"]}
                  />
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default WishList;
