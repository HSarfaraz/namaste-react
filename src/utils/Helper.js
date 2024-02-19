export function filterData(searchText, allRestaurants) {
  //filter the data based on the input
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filteredData);
  return filteredData;
}
