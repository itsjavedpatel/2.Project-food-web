import { CDN_URL, NONVEG_URL, VEG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, sla, costForTwo, veg } =
    resObj.info;
  return (
    <div className="card w-[350px] sm:w-[270px]">
      <div className="card-images">
        <img className="card-image" src={CDN_URL + cloudinaryImageId} />
        <img className="hallMark-img" src={veg ? VEG_URL : NONVEG_URL} />
      </div>
      <div className="card-body">
        <h3 className="restro-name">{name}</h3>
        <div className="card-info">
          <p className="foods">{cuisines.join(", ")}</p>
          <div className="pricing">
            <p>{costForTwo}</p>
            <p className="time">{sla.deliveryTime}min</p>
            <p className="rating">
              {avgRating ? avgRating + "⭐⭐" : "No Rating"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className=" relative">
        <label className="absolute top-1.5 left-1 bg-black text-sm sm:text-lg text-white z-10 rounded-lg px-2 py-1 font-semibold">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
