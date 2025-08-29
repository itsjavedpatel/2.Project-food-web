import { useEffect, useRef, useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);
  return (
    <div className="w-full  sm:w-3/4  mx-auto  ">
      {/* Accordian Header */}
      <div className="flex flex-col justify-center  rounded-lg    gap-2  ">
        <div
          className="flex rounded-lg justify-between bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold px-2">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </div>
        {/* Accordian body */}
        <div
          ref={contentRef}
          style={{
            maxHeight: height,
            transition: "max-height 0.5s linear",
          }}
          className={` overflow-hidden `}
        >
          <ItemList itemCards={data.itemCards} />
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
