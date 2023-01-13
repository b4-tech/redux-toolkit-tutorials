import { useSelector } from "react-redux";
import { ordered as CakeOrdered } from "./cakeSlice";

const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button>Order cake</button>
      <button>Restock cakes</button>
    </div>
  );
};

export default CakeView;
