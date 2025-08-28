import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-full  sm:w-3/4  p-2 mx-auto ">
      {/* Accordian Header */}
      <div className="flex flex-col justify-center shadow-lg rounded-lg bg-gray-100  p-2 gap-4  ">
        <div
          className="flex justify-between bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold px-2">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>▼</span>
        </div>
        {/* Accordian body */}
        {isOpen && <ItemList itemCards={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
