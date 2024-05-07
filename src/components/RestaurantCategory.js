import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // Assuming this function toggles the showItems state
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span><i className="ri-arrow-down-s-line"></i></span>
        </div>

        {showItems && <ItemList items={data.itemCards} />} 
        {/* Render ItemList when showItems is true */}
      </div>
    </div>
  );
};

export default RestaurantCategory;
