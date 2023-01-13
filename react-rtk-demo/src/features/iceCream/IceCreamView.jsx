import React from "react";
import { useSelector } from "react-redux";

const IceCreamView = () => {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  return (
    <div>
      <h2>Number of ice creams - {numberOfIceCreams}</h2>
      <button>Order ice cream</button>
      <button>Restock ice creams</button>
    </div>
  );
};

export default IceCreamView;
