import React, { useContext } from "react";
import classes from "./WishList.module.css";
import { VscClose } from "react-icons/vsc";
import ShopContext from "../../context/Context";
import axios from "axios";
const WishList = () => {
  const { wishList, addToCart, removeFromWishList, cookie, setCartItems } =
    useContext(ShopContext);
  const removeFromWishList1 = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/removefromwishList",
        { itemId: id },
        {
          headers: {
            key: cookie.key,
          },
        }
      );
      console.log(response);
      // setCartItems((prevCartItems) =>
      //   prevCartItems.filter((item) => item.id !== id)
      removeFromWishList(id);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };
  return (
    // <div className={classes["wishlist"]}>
    //   <div className={classes["wishlist-head"]}>
    //     <h2>My WishList</h2>
    //   </div>
    //   <table>
    //     <tr>
    //       <th className={classes["wishlist-product"]}>Product</th>
    //       <th>Unit Price</th>
    //       <th>Stock Status</th>
    //     </tr>
    //     {wishList &&
    //       wishList.map((pr) => {
    //         return (
    //           <tr key={pr.id}>
    //             <td className={classes["wish-img"]}>
    //               <img src={pr.img} alt="" />
    //               <p>{pr.name}</p>
    //             </td>
    //             <td className={classes["price"]}>{pr.curr_price}</td>
    //             <td>
    //               <span>in stock</span>
    //             </td>
    //             <td>
    //               <button
    //                 onClick={() => {
    //                   removeFromWishList(pr.id);
    //                   addToCart(pr);
    //                 }}
    //               >
    //                 Add to cart
    //               </button>
    //             </td>
    //             <td>
    //               <VscClose
    //                 onClick={() => removeFromWishList(pr.id)}
    //                 className={classes["mark"]}
    //               />
    //             </td>
    //           </tr>
    //         );
    //       })}
    //   </table>
    // </div>
    <div className={classes["wishlist"]}>
      <div className={classes["wishlist-head"]}>
        <h2>My WishList</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th className={classes["wishlist-product"]}>Product</th>
            <th>Unit Price</th>
            <th>Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {wishList &&
            wishList.map((pr) => {
              return (
                <tr key={pr.id}>
                  <td className={classes["wish-img"]}>
                    <img src={pr.img} alt="" />
                    <p>{pr.name}</p>
                  </td>
                  <td className={classes["price"]}>{pr.curr_price}</td>
                  <td>
                    <span>in stock</span>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        removeFromWishList1(pr.id);
                        addToCart(pr);
                      }}
                    >
                      Add to cart
                    </button>
                  </td>
                  <td>
                    <VscClose
                      onClick={() => removeFromWishList1(pr.id)}
                      className={classes["mark"]}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
