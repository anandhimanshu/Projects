import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useRestaurantMenu";
// import { IMG_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId); // Corrected hook usage
  // console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      .card?.itemCards;

  //  console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    // <div>
    //   <h1 className="m-4 text-center font-bold text-3xl mx-6">Restaurant Info </h1>
    //   <div className="flex justify-between items-center m-4 p-4">
    //     <h2 className="text-2xl font-semibold">
    //       Name: {resInfo?.data?.cards[2]?.card?.card?.info.name}
    //     </h2>
    //     <h3 className="p-4 m-6 font-semibold text-xl">
    //       Cuisines: {resInfo?.data?.cards[2]?.card?.card?.info.cuisines}
    //     </h3>
    //     <img
    //       className="w-32 rounded-lg"
    //       src={
    //         IMG_URL +
    //         resInfo?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
    //       }
    //     />
    //   </div>
    // </div>
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage};
      </p>
      {/**categories accordian */}
      {categories.map((category)=>(
        <RestaurantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
