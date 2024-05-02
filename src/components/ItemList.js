import { IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between items-center"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
            <div className="absolute">
            <button className="p-2 rounded-lg bg-green-100 bg-opacity-50 text-black shadow-lg "> Add +</button>
            </div>
            <img src={IMG_URL + item.card.info.imageId} />
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
