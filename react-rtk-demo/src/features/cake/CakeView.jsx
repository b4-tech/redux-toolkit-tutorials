import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const dispatch = useDispatch();
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  );
};

export default CakeView;
