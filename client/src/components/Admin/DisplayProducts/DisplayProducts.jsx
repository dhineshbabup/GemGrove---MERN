import React, { useState } from "react";
import classes from "./DisplayProducts.module.css";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineDelete } from "react-icons/md";
import Popup from "../Popup/Popup";
import axios from "axios";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
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
        <Popup>
          <h2>Are you want to delete it?</h2>
          <p>Once you delete the product, you can't retrive it.</p>
          <div>
            {/* <button className={} >
              
            </button> */}
            <Button handleFunction={handleShowPopup} style={classes["cancel"]}>
              Cancel
            </Button>
            <Button handleFunction={handleDelete}>Confirm</Button>
          </div>
        </Popup>
      )}
      <img src={props.img} alt="img" />
      <h2>{props.name}</h2>
      <p>&#8377; {props.price}</p>
      {props.isEdit && (
        <>
          <Link to={`/editproduct/${props._id}`}>
            <LiaEditSolid className={classes["product-edit"]} />
          </Link>
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
