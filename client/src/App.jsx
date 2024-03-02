import React, { createContext, useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Helper/Home";
import Product from "./components/UI/Product";
import Cart from "./components/cart/Cart";
import WishList from "./components/WishList/WishList";
import LoginSignup from "./components/Authentication/LoginSignup";
import Footer from "./components/Footer/Footer";
import ShowProduct from "./Pages/ShowProduct";
import Profile from "./components/Profile/Profile";
import DashBoard from "./components/Admin/Dashboard/DashBoard";
import EditProduct from "./components/Admin/EditProduct/EditProduct";
import { useCookies } from "react-cookie";
import ShopContext from "./context/Context";

const USER_TYPES = {
  PUBLIC: "PUBLIC_USER",
  USER: "USER",
  ADMIN: "ADMIN",
};
function App() {
  const { cookie } = useContext(ShopContext);
  const navigate = useNavigate();
  const CURRENT_USER_TYPE =
    cookie.role === undefined
      ? USER_TYPES.PUBLIC
      : cookie.role === true
      ? USER_TYPES.ADMIN
      : USER_TYPES.USER;
  console.log(CURRENT_USER_TYPE);
  return (
    <>
      {CURRENT_USER_TYPE !== USER_TYPES.ADMIN ? <Navbar /> : ""}
      <Routes>
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <DashBoard />
            </AdminRoute>
          }
        />

        <Route
          path="/editproduct"
          element={
            <AdminRoute>
              <EditProduct />
            </AdminRoute>
          }
        >
          <Route
            path="/editproduct/:product"
            element={
              <AdminRoute>
                <EditProduct />
              </AdminRoute>
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PublicRoute>
              <Product />
            </PublicRoute>
          }
        >
          <Route
            path=":productId"
            element={
              <PublicRoute>
                <Product />
              </PublicRoute>
            }
          />
        </Route>
        <Route
          path="/showproduct"
          element={
            <PublicRoute>
              <ShowProduct />
            </PublicRoute>
          }
        >
          <Route
            path="/showproduct/:category"
            element={
              <PublicRoute>
                <ShowProduct />
              </PublicRoute>
            }
          />
        </Route>
        <Route
          path="/cart"
          element={
            <UserRoute>
              <Cart />
            </UserRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <UserRoute>
              <WishList />
            </UserRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <UserRoute>
              <Profile />
            </UserRoute>
          }
        />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      {CURRENT_USER_TYPE !== USER_TYPES.ADMIN ? <Footer /> : ""}
    </>
  );
  function AdminRoute({ children }) {
    if (CURRENT_USER_TYPE === USER_TYPES.ADMIN) {
      return <>{children}</>;
    }
  }
  function UserRoute({ children }) {
    if (CURRENT_USER_TYPE === USER_TYPES.USER) {
      return <>{children}</>;
    }
    return <>Page Not found</>;
  }
  function PublicRoute({ children }) {
    if (
      CURRENT_USER_TYPE === USER_TYPES.USER ||
      CURRENT_USER_TYPE === USER_TYPES.PUBLIC
    ) {
      return <>{children}</>;
    }
    return <>Page Not found</>;
  }
}

export default App;
