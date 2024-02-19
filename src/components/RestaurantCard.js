import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/CustomContext/UserContext";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-100 rounded h-96">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="burger"
        className="h-40 rounded w-full"
      />

      <h3 className="text-bolder text-l p-2">{name}</h3>
      <h5 className="text-bold text-sm p-2">{cuisines.join(", ")}</h5>
      <h5 className="text-bold text-sm p-2">
        <span>✪</span> {avgRating} . {sla.slaString}
      </h5>
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestaurantCard;
