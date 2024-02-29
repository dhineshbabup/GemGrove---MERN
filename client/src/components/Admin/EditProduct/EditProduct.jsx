import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import classes from "./EditProduct.module.css";
import Button from "../../UI/Button";
import Model from "../Popup/Model";
const EditProduct = () => {
  const { product } = useParams();
  const updateRef = useRef();
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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/admin/getproduct/${product}`
        );
        const productData = response.data;

        setName(productData.name || "");
        setCurrentPrice(productData.curr_price || "");
        setOldPrice(productData.old_price || "");
        setCategory(productData.category || "");
        setImages({
          img1: productData.images?.img1 || "",
          img2: productData.images?.img2 || "",
          img3: productData.images?.img3 || "",
          img4: productData.images?.img4 || "",
        });
        setOffer(productData.offer || "");
        setTags(productData.tags || "");
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [product]);
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/admin/updateproduct",
        {
          _id: product,
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
        updateRef.current.open();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Model ref={updateRef}>
        <p>Product updated successfully.</p>
      </Model>
      <div className={classes["edit-products"]}>
        <h2>Edit the details</h2>
        <div className={classes["edit-product"]}>
          <div className={classes["edit-product-left"]}>
            <label htmlFor="">
              <span>*</span>Product Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">
              <span>*</span>Current Price:
            </label>
            <input
              type="text"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
            />
            <label htmlFor="">Old Price:</label>
            <input
              type="text"
              value={oldPrice}
              onChange={(e) => setOldPrice(e.target.value)}
            />
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
          <div className={classes["edit-product-right"]}>
            <label htmlFor="">
              <span>*</span>Images Link(atleast one):
            </label>
            <input
              type="text"
              name="img1"
              placeholder="Link 1"
              value={images.img1}
              onChange={handleChangeImage}
            />
            <input
              type="text"
              name="img2"
              value={images.img2}
              placeholder="Link 2"
              onChange={handleChangeImage}
            />
            <input
              type="text"
              name="img3"
              value={images.img3}
              placeholder="Link 3"
              onChange={handleChangeImage}
            />
            <input
              type="text"
              name="img4"
              value={images.img4}
              placeholder="Link 4"
              onChange={handleChangeImage}
            />
            <label htmlFor="">Offer percentage:</label>
            <input
              type="text"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
            />
            <label htmlFor="">Tags:</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>
        <Button
          handleFunction={handleSubmit}
          style={classes["edit-product-button"]}
        >
          Update
        </Button>
      </div>
    </>
  );
};

export default EditProduct;
