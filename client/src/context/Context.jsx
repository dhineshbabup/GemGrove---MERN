import { createContext, useState } from "react";

const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const addToCart = (item) => {
    setCartItems((prev) => {
      const p = prev.filter((pre) => pre.id === item.id);
      return p.length === 0 ? [...prev, item] : [...prev];
    });
  };
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
  const contextValue = {
    addToCart,
    cartItems,
    removeFromCart,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    cartItemsLength: cartItems.length,
    removeFromWishList,
    wishList,
    addToWishList,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
export default ShopContext;
