import React, { useEffect, useState } from "react";
import classes from "./NewArrival.module.css";
import ProductDisplay from "../../UI/ProductDisplay";
import axios from "axios";
const NewArrival = () => {
  const [newArrival, setNewArrival] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8000/user/getnewarrival"
      );
      console.log(response.data);
      setNewArrival(response.data);
    };
    fetchData();
  });
  console.log(newArrival);
  return (
    <div className={classes.new}>
      <h2>New Arrival</h2>
      <div className={classes.con} key={"12"}>
        {newArrival.map((s) => {
          return (
            <ProductDisplay
              id={s._id}
              img={s.images.img1}
              offer={s.offer}
              tag={s.tag}
              old_price={s.old_price}
              curr_price={s.curr_price}
              name={s.name}
              quantity={1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewArrival;
