import React from 'react';
import { IMG_URL } from '../utils/constants';
import Shimmer from './Shimmer';


const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

    if (!resData) {
      return <Shimmer />;
    }

  return (
    <div
      className="m-4 p-2 w-[250px] rounded-lg  "
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="rounded-lg"
        src={IMG_URL + cloudinaryImageId}
        alt="Biryani"
      />
      <h3 className="text-lg font-bold mt-2 p-2 ">{name}</h3>
      <h4 className="px-2">{cuisines.join(", ")}</h4>
      <h4 className="px-2">
        <i class="ri-star-s-fill"></i> {avgRating}
      </h4>
      <h4 className="px-2">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
