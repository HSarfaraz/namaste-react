import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/CustomRedux/createSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">
        Cart Component - {cartItems.length}
      </h1>
      <button
        className="bg-green-100 p-2 m-2"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
