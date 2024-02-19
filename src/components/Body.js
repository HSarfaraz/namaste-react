import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/CustomHooks/useOnline";
import UserContext from "../utils/CustomContext/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    //Calling an API
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const fetchedRestaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setAllRestaurants(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
    } catch (error) {
      console.log("Error fetching restuarant", error);
    }
  }

  /* const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="card-offline">
        <h4>🔴 Offline! See your internet connection</h4>
      </div>
    );  
  } */
  if (!allRestaurants) return null;

  return filteredRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 my-2 bg-gray-200 text-center">
        <input
          data-testid="search-input"
          type="text"
          value={searchText}
          placeholder="Search"
          className="p-1 bg-white rounded focus:bg-green-50"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          style={{ margin: "10px" }}
        />
        <button
          data-testId="search-btn"
          className="p-1 px-3 m-2 bg-purple-700 hover:bg-gray-900 text-white rounded"
          onClick={() => {
            //need to filter the data what user enter from restaurants
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* Sample to get the data from context */}
        <input
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard
                {...restaurant?.info}
                key={restaurant?.info?.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
