import React from "react";
import classes from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <div id={classes.dash}>
      <div className={classes.about}>
        <h2>GemGrove</h2>
        <p>
          Where every gem tells a story, and each piece is a testament to
          timeless elegance.
        </p>
        <button >Shop Now</button>
      </div>
    </div>
  );
};

export default Dashboard;
