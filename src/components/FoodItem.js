import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/CustomContext/UserContext";

const FoodItem = ({ cloudinaryImageId, name, description, price }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-100 rounded h-96">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="burger"
        className="h-40 rounded w-full"
      />

      <h3 className="text-bolder text-l p-2">{name}</h3>
      <h5 className="text-bold text-sm p-2">{description}</h5>
      <h5 className="text-bold text-sm p-2">Rupees: {price / 100}</h5>
    </div>
  );
};

export default FoodItem;
