import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/CustomHooks/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CustomRedux/createSlice";

const RestaurantMenu = () => {
  const { id } = useParams(); // How to use dynamic url
  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
    console.log(restaurant);
  };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div className="card p-3 m-2">
        <h3>{restaurant.name}</h3>
        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          className="w-40 rounded"
        />
        <h4>Restaurant id: {restaurant.id}</h4>
        <h6>
          {restaurant?.areaName}
          <br />
          {restaurant?.city}
          <br />
          {restaurant?.costForTwo}
          <br />
          {restaurant?.avgRating}
        </h6>
      </div>
      <div>
        <button
          className="p-2 m-5 bg-green-100 rounded"
          onClick={handleAddItem()}
        >
          Add Item
        </button>
        {console.log("test", restaurant)}
      </div>
      {/* <div className="card">
        {console.log(restaurant)}
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}

        </ul>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
