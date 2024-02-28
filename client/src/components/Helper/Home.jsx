import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Collections from "../Collections/Collections";
import Offers from "../Offers/Offers";
import NewArrival from "../Collections/New Arrival/NewArrival";
const Home = () => {
  return (
    <div>
      <Dashboard />
      <Collections />
      <Offers />
      {/* <NewArrival /> */}
    </div>
  );
};

export default Home;
