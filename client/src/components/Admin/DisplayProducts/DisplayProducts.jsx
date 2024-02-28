import React, { useState } from "react";
import classes from "./DisplayProducts.module.css";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineDelete } from "react-icons/md";
import Popup from "../Popup/Popup";
import axios from "axios";
const DisplayProducts = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  function handleShowPopup() {
    setShowPopup(!showPopup);
  }
  async function handleDelete() {
    try {
      const response = await axios.delete(
        `http://localhost:8000/admin/deleteitem/${props._id}`
      );
      if (response.status === 200) {
        handleShowPopup();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classes["display-product"]}>
      {showPopup && (
        <Popup
          message={"Are you want to delete it?"}
          alert={"Once you delete the product, you can't retrive it."}
          handleShowPopup={handleShowPopup}
          handleDelete={handleDelete}
        />
      )}
      <img src={props.img} alt="img" />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      {props.isEdit && (
        <>
          <LiaEditSolid className={classes["product-edit"]} />
          <MdOutlineDelete
            className={classes["product-edit"]}
            onClick={handleShowPopup}
          />
        </>
      )}
    </div>
  );
};

export default DisplayProducts;
