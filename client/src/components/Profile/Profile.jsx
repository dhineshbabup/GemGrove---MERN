import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Profile.module.css";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import AddressForm from "./AddressForm";
const Profile = () => {
  const [info, setInfo] = useState("personal-info");
  const [showAddress, setShowAddress] = useState(false);
  const navigate = useNavigate();
  function handleInfo(data) {
    setInfo(data);
  }
  function handleShowAddress() {
    setShowAddress(!showAddress);
  }
  function logoutHandler() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className={classes["profile"]}>
      {showAddress && <AddressForm handleShowAddress={handleShowAddress} />}
      <div className={classes["profile-left"]}>
        <h2>My account</h2>
        <div className={classes["profile-left-content"]}>
          <p onClick={() => handleInfo("personal-info")}>
            Personal information
          </p>
          <p onClick={() => handleInfo("address")}>Address</p>
          <p onClick={() => handleInfo("orders")}>Orders</p>
          <p onClick={logoutHandler}>Logout</p>
        </div>
      </div>
      <div className={classes["profile-right"]}>
        {info === "personal-info" ? (
          <PersonalInfo />
        ) : info === "address" ? (
          <Address handleShowAddress={handleShowAddress} />
        ) : (
          ""
        )}
      </div>
      {/* <div>sd</div> */}
    </div>
  );
};

export default Profile;
