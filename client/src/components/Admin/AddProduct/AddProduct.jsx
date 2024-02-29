import React, { useRef, useState } from "react";
import classes from "./AddProduct.module.css";
import axios from "axios";
import Popup from "../Popup/Popup";
import Model from "../Popup/Model";
import Button from "../../UI/Button";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  });
  const [offer, setOffer] = useState("");
  const [tags, setTags] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const model = useRef();
  function handleShowPopup() {
    setShowPopup(!showPopup);
  }
  function handleChangeCategory(e) {
    setCategory(e.target.value);
  }
  function handleChangeImage(e) {
    const { name, value } = e.target;
    setImages((prevImages) => ({
      ...prevImages,
      [name]: value,
    }));
  }
  async function handleAddProductSubmit() {
    console.log(name, currentPrice, oldPrice, category, images, offer, tags);
    if (
      name.trim() === "" ||
      currentPrice.trim() === "" ||
      category === "" ||
      Object.values(images).every((image) => image.trim() === "")
    ) {
      return model.current.open();
      // handleShowPopup();
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/admin/addproduct",
        {
          name,
          curr_price: Number(currentPrice),
          old_price: Number(oldPrice),
          images,
          category,
          tags,
          offer,
        }
      );
      if (response.status === 200) {
        handleShowPopup();
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Model ref={model}>
        <p>Fill the all required form</p>
      </Model>
      <div className={classes["add-product"]}>
        {showPopup && (
          <Popup>
            <h2>Product added successfully</h2>
            <p className={classes["popup-cancel"]} onClick={handleShowPopup}>
              Close
            </p>
          </Popup>
        )}

        <div className={classes["add-product-left"]}>
          <label htmlFor="">
            <span>*</span>Product Name:
          </label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <label htmlFor="">
            <span>*</span>Current Price:
          </label>
          <input
            type="text"
            onChange={(e) => setCurrentPrice(e.target.value)}
          />
          <label htmlFor="">Old Price:</label>
          <input type="text" onChange={(e) => setOldPrice(e.target.value)} />
          <label htmlFor="items">
            <span>*</span>Select Category:
          </label>
          <select id="items" value={category} onChange={handleChangeCategory}>
            <option value="">Select Category:</option>
            <option value="rings">Rings</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="watch">Watch</option>
            <option value="handbags">Handbags</option>
            <option value="necklace">Necklace</option>
            <option value="perfume">Perfume</option>
          </select>
        </div>
        <div className={classes["vertical-line"]}></div>
        <div className={classes["add-product-right"]}>
          <label htmlFor="">
            <span>*</span>Images Link(atleast one):
          </label>
          <input
            type="text"
            name="img1"
            placeholder="Link 1"
            onChange={handleChangeImage}
          />
          <input
            type="text"
            name="img2"
            placeholder="Link 2"
            onChange={handleChangeImage}
          />
          <input
            type="text"
            name="img3"
            placeholder="Link 3"
            onChange={handleChangeImage}
          />
          <input
            type="text"
            name="img4"
            placeholder="Link 4"
            onChange={handleChangeImage}
          />
          <label htmlFor="">Offer percentage:</label>
          <input type="text" onChange={(e) => setOffer(e.target.value)} />
          <label htmlFor="">Tags:</label>
          <input type="text" onChange={(e) => setTags(e.target.value)} />
        </div>
        <Button
          style={classes["add-product-button"]}
          handleFunction={handleAddProductSubmit}
        >
          Add product
        </Button>
      </div>
    </>
  );
};

export default AddProduct;
