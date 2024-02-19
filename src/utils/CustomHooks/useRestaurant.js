import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo(); //get the api call
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurant(json.data.cards[0].card.card.info);
  }
  return restaurant; // return the data
};

export default useRestaurant;
