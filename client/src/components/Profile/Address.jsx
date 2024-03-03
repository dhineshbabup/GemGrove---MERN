import React, { useContext, useState } from "react";
import classes from "./Profile.module.css";
import { MdOutlineLocationOn } from "react-icons/md";
import AddressForm from "./AddressForm";
import ShopContext from "../../context/Context";
import { AiTwotoneDelete } from "react-icons/ai";
import axios from "axios";
const Address = ({ address }) => {
  const [name, setName] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [door_no, setDoor_no] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [place, setPlace] = useState("");
  const [street, setStreet] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [editShowAddress, setEditShowAddress] = useState(false);
  const { cookie } = useContext(ShopContext);
  function handleStreet(e) {
    setStreet(e.target.value);
  }
  function handleName(e) {
    setName(e.target.value);
  }
  function handleMobile(e) {
    setMobile_no(e.target.value);
  }
  function handleDoorNo(e) {
    setDoor_no(e.target.value);
  }
  function handlePincode(e) {
    setPincode(e.target.value);
  }
  function handleCity(e) {
    setCity(e.target.value);
  }
  function handleState(e) {
    setState(e.target.value);
  }
  function handlePlace(e) {
    setPlace(e.target.value);
  }
  function handleEditShowAddress() {
    setEditShowAddress(!editShowAddress);
  }
  function handleShowAddress() {
    setShowAddress(!showAddress);
  }
  const handleAddAddress = async (addressInfo) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/addaddress",
        { addressInfo },
        {
          headers: {
            key: cookie.key,
          },
        }
      );
      console.log(response.status);
      if (response.status === 200) handleShowAddress();
    } catch (err) {
      console.log(err);
    }
  };
  async function handleDeleteAddress(_id) {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/deleteaddress",
        { _id: _id },
        { headers: { key: cookie.key } }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={classes["address"]}>
      {showAddress && (
        <AddressForm
          addressInfo={{
            name,
            mobile_no,
            door_no,
            pincode,
            city,
            state,
            place,
            street,
          }}
          handlers={{
            handleShowAddress,
            handlePlace,
            handleName,
            handleMobile,
            handleDoorNo,
            handleCity,
            handlePincode,
            handleState,
            handleStreet,
            handleAddAddress,
          }}
        />
      )}
      {editShowAddress && (
        <AddressForm handleEditShowAddress={handleEditShowAddress} />
      )}
      <h2>Address Book</h2>
      <p>Save all your addresses for a faster checkout experience.</p>
      <div className={classes["address-info"]}>
        <div className={classes["add-address"]} onClick={handleShowAddress}>
          <MdOutlineLocationOn /> Add new Address
        </div>
        {address &&
          address.map((a) => {
            console.log(a);
            return (
              <div className={classes["addresses"]} key={a._id}>
                <h4>{a.name}</h4>
                <aside>
                  <p>{a.mobile_no},</p>
                  <p>{a.door_no},</p>
                  <p>{a.street},</p>
                  <p>{a.city},</p>
                  <p>{a.pincode},</p>
                  <p>{a.city},</p>
                  <p>{a.state},</p>
                  <p>{a.place}.</p>
                </aside>
                <AiTwotoneDelete
                  className={classes["address-delete-buuton"]}
                  onClick={() => handleDeleteAddress(a._id)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Address;
