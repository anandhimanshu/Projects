import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const [filterRestaurant, setFilterRestaurant] = useState([]);

  // Whenever the state variables updates, react trigger a reconciliation cycle(re-renders the component)...

  const [searchText, setSearchText] = useState("");

    console.log(listOfRestaurant);

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
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if(listOfRestaurant.length === 0){
  //   return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="offline_h1">Ooppsss !!! You're Offline , try again</h1>
    );

  //this is known as Conditional Rendering ---

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-evenly items-center px-4 m-2 text-lg">
        <button
          className="text-xl p-2 m-2 font-bold text-red-500 bg-gray-50"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilterRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div>
        <input
          className=" border border-solid border-black w-70 text-lg px-4 rounded-lg"
          type="text"
          placeholder="Search Food or Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="text-xl bg-gray-100 px-4 ml-3 font-semi-bold   rounded-lg"
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
        
      </div>
      <div className="flex justify-evenly items-center flex-wrap ">
        {filterRestaurant.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

//final version , everything works fine... till ep - 10 completed
