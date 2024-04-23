import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useRestaurantMenu"
import { IMG_URL } from "../utils/constants"

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId); // Corrected hook usage
  console.log(resInfo);
  if (resInfo === null) return <h1>Loading</h1>;



  return (
    <div>
      <h1 className="m-4 font-bold text-3xl mx-6">Menu </h1>
      <div className="flex justify-between items-center m-4 p-4">
        <h2 className="text-2xl font-semibold">
          Name: {resInfo?.data?.cards[2]?.card?.card?.info.name}
        </h2>
        <h3 className="p-4 m-6 font-semibold text-xl">
          Cuisines: {resInfo?.data?.cards[2]?.card?.card?.info.cuisines}
        </h3>
        <img
          className="w-32 rounded-lg"
          src={
            IMG_URL +
            resInfo?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
          }
        />
      </div>
    </div>
  );
};

export default RestaurantMenu;
