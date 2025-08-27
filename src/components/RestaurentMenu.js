import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  const { name, avgRating, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  console.log(resInfo?.data?.cards[2]?.card?.card?.info);
  const { itemCards } =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {costForTwoMessage} - {avgRating}{" "}
      </p>
      <p>{cuisines.join(", ")}</p>
      <h2>Recommended</h2>
      <div>
        <ul>
          {itemCards?.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {item.card.info.itemAttribute.portionSize}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurentMenu;
