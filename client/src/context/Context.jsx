import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["key", "role"]);
  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const addToCart = (item) => {
    setCartItems((prev) => {
      const p = prev.filter((pre) => pre.id === item.id);
      return p.length === 0 ? [...prev, item] : [...prev];
    });
  };
  console.log(cartItems);
  const removeFromCart = (id) => {
    setCartItems(() => cartItems.filter((c) => c.id !== id));
  };
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => {
      console.log(prev);
      if (prev > 1) {
        return prev - 1;
      }
      return (prev = 1);
    });
  };
  //wishlist
  const removeFromWishList = (id) => {
    console.log(id);
    setWishList(() => wishList.filter((w) => w.id !== id));
  };
  const addToWishList = (item) => {
    setWishList((prev) => {
      const p = prev.filter((pre) => pre.id === item.id);
      return p.length === 0 ? [...prev, item] : [...prev];
    });
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (cartItems.length === 0) {
        const response = await axios.get("http://localhost:8000/user/getcart", {
          headers: {
            key: cookie.key,
          },
        });
        console.log(response);
        for (let i = 0; i < response.data.cart.length; i++) {
          addToCart(response.data.cart[i]);
        }
      }
    };
    fetchCart();
  }, [cookie.key, cartItems.length, addToCart]);

  useEffect(() => {
    const fetchWishList = async () => {
      if (cartItems.length === 0) {
        const response = await axios.get(
          "http://localhost:8000/user/getwishlist",
          {
            headers: {
              key: cookie.key,
            },
          }
        );
        for (let i = 0; i < response.data.wishlist.length; i++) {
          addToWishList(response.data.wishlist[i]);
        }
      }
    };
    fetchWishList();
  }, [cookie.key, wishList.length, addToWishList]);
  const contextValue = {
    addToCart,
    cartItems,
    removeFromCart,
    quantity,
    setCartItems,
    setQuantity,
    increaseQuantity,
    decreaseQuantity,
    cartItemsLength: cartItems.length ? cartItems.length : 0,
    removeFromWishList,
    wishList,
    addToWishList,
    cookie,
    setCookie,
    removeCookie,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export default ShopContext;
