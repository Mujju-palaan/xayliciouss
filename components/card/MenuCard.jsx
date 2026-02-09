import React from "react";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../../app/slice/items/itemsSlice";

const MenuCard = ({ id, image, title, description, price, quantity }) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(
      addItemsToCart({
        id,
        image,
        title,
        description,
        price,
        quantity
      })
    );
  };

  return (
    <li className="list-none border p-4 rounded">
      <h1>{title}</h1>
      <p>${price}</p>

      <button
        onClick={handleCart}
        className="mt-2 px-3 py-1 rounded border hover:bg-gray-100"
      >
        Add to Cart
      </button>
    </li>
  );
};

export default MenuCard;
