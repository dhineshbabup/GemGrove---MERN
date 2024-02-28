import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Helper/Home";
import Product from "./components/UI/Product";
import Cart from "./components/cart/Cart";
import WishList from "./components/WishList/WishList";
import LoginSignup from "./components/Authentication/LoginSignup";
import Footer from "./components/Footer/Footer";
import ShowProduct from "./Pages/ShowProduct";
import Profile from "./components/Profile/Profile";
import DashBoard from "./components/Admin/Dashboard/DashBoard";
function App() {
  return (
    <BrowserRouter>
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/showproduct" element={<ShowProduct />}>
            <Route path="/showproduct/:category" element={<ShowProduct />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        {/* <Footer /> */}
      </>
      <>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
//<Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
