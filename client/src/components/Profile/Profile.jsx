import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Profile.module.css";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import AddressForm from "./AddressForm";
import axios from "axios";
import ShopContext from "../../context/Context";
const Profile = () => {
  const [info, setInfo] = useState("personal-info");
  const { cookie, removeCookie } = useContext(ShopContext);
  const navigate = useNavigate();
  function handleInfo(data) {
    setInfo(data);
  }

  function logoutHandler() {
    localStorage.removeItem("token");
    removeCookie("key");
    removeCookie("role");
    navigate("/");
  }
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        "http://localhost:8000/user/getusercredential",
        {
          headers: {
            key: cookie.key,
          },
        }
      );
      setName(response.data.name);
      setEmail(response.data.email);
      setMobile(response.data.mobile_no);
      setAddress(response.data.address);
      setUser(response.data);
    };
    fetchUser();
  }, [address]);
  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleMobile(e) {
    setMobile(e.target.value);
  }
  function handlePopup() {
    setShowPopup(!showPopup)
  }
  async function updatePersonalInfo() {
    if (mobile.length !== 10) {
      return alert("Mobile number should contain 10 numbers");
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/user/updatepersonalinfo",
        {
          name,
          email,
          mobile,
        },
        {
          headers: {
            key: cookie.key,
          },
        }
      );
      if(response.status === 200) {
        handlePopup();
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={classes["profile"]}>
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
          <PersonalInfo
            name={name}
            email={email}
            mobile={mobile}
            handleName={handleName}
            handleEmail={handleEmail}
            handleMobile={handleMobile}
            updatePersonalInfo={updatePersonalInfo}
            showPopup={showPopup}
            handlePopup={handlePopup}
          />
        ) : info === "address" ? (
          <Address
            address={address}
          />
        ) : (
          ""
        )}
      </div>
      {/* <div>sd</div> */}
    </div>
  );
};

export default Profile;
