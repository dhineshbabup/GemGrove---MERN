import React from "react";
import classes from "./NewArrival.module.css";
import ProductDisplay from "../../UI/ProductDisplay";
import new_arrival from "../../../assets/new_arrival";
const NewArrival = () => {
  return (
    <div className={classes.new}>
      <h2>New Arrival</h2>
      <div className={classes.con} key={"12"}>
        {new_arrival.map((s) => {
          return (
            <ProductDisplay
              id={s.id}
              image={s.image}
              offer={s.offer}
              tag={s.tag}
              old_price={s.old_price}
              current_price={s.current_price}
              alt={s.alt}
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
