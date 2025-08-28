import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  const { itemCards } = props;
  //   console.log(itemCards);  

  return (
    <div className="flex flex-col justify-start items-start p-4">
      {itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between flex-col sm:flex-row items-center p-2 m-2 border-b-2 border-gray-200 w-full gap-2 hover:bg-green-100 rounded-lg"
        >
          <div className="w-full sm:w-3/4 flex flex-col gap-1  justify-center text-left text-sm sm:text-md">
            <p className="font-bold">{item.card.info.name}</p>
            <p>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p className="text-gray-500 text-xs">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative w-full sm:w-1/4 ">
            <div className="absolute bottom-0 right-0 m-2">
              <button className="bg-black text-white px-2 py-1 rounded-lg hover:bg-green-600">
                Add+
              </button>
            </div>
            <img
              className=" rounded-lg  h- aspect-video object-cover "
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
