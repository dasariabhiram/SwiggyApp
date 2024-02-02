import React, { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import resList from "../utils/swiggyData"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!onlineStatus)
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Looks like you're offline!! Please check your internet connection.
        </h1>
      </div>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto p-6">
      <div className="filter flex flex-col sm:flex-row items-center justify-between mb-8">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-gray-300 p-2 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search for restaurants..."
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg ml-2 mt-2 sm:mt-0"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
