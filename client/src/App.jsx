import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Helper/Home";
import Product from "./components/UI/Product";
import Cart from "./components/cart/Cart";
import WishList from "./components/WishList/WishList";
import LoginSignup from "./components/Authentication/LoginSignup";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<LoginSignup />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
//<Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>