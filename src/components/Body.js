import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const [filterRestaurant , setFilterRestaurant] = useState([]);

  // Whenever the state variables updates, react trigger a reconciliation cycle(re-renders the component)...

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await info.json();

    //Optional Chaining -

    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // if(listOfRestaurant.length === 0){
  //   return <Shimmer />
  // }

  //this is known as Conditional Rendering ---

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <button
          className="top-rated"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilterRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          className="search-box"
          type="text"
          placeholder="Search Food or Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // Filter the restaurant cards and update the UI ---
            const filteredRestaurant = listOfRestaurant.filter((data) =>
              data.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilterRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

//final version , everything works fine... till ep - 6 completed
