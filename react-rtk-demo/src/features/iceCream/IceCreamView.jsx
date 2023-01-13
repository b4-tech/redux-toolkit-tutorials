import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
const IceCreamView = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  return (
    <div>
      <h2>Number of ice creams - {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice creams
      </button>
    </div>
  );
};

export default IceCreamView;
