import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./../utils/useOnlineStatus";
const Body = () => {
  let [listOfRes, setListOfRes] = useState([]);
  let [filteredRes, setFilteredRes] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      console.log(jsonData);
      // Optional chaining to safely access nested properties
      // Extracting the list of restaurants from the JSON data
      const restaurants =
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(restaurants);
      // console.log(jsonData);
      setTimeout(() => {
        restaurants ? setListOfRes(restaurants) : "";
        restaurants ? setFilteredRes(restaurants) : "";
      }, 500);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    console.log("Internet is down");
    return <h1>Looks Like your internet is down..Connect to internet</h1>;
  }
  // Conditional Rendering
  if (filteredRes.length == 0) {
    return <Shimmer />;
  }
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  return (
    <div className="restaurant-container sm:w-full !sm:mx-0 ">
      <div className="filter sm:w-[100%] flex-wrap">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRes(filteredList);
          }}
        >
          Top Rated Restaurent
        </button>
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search for restaurents"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredList = listOfRes.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              filteredList.length ? setFilteredRes(filteredList) : "";
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRes.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              filteredList.length ? setFilteredRes(filteredList) : "";
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
      </div>
      <div className="card-container">
        {filteredRes.map((restaurent) => (
          <Link
            to={"/restaurant/" + restaurent.info.id}
            key={restaurent.info.id}
            className="card-link"
          >
            {restaurent.info.promoted ? (
              <RestaurantCardPromoted resObj={restaurent} />
            ) : (
              <RestaurantCard resObj={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
