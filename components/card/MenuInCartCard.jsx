import {
  DecreaseQuantity,
  IncreaseQuantity,
  RemoveFromCart,
} from "@/app/slice/items/itemsSlice";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

const MenuInCartCard = ({ id, image, title, description, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-x-4 gap-y-0 bg-white p-2 rounded-xl shadow-sm w-full max-w-lg">
      <div className="flex gap-4">

        {/* Image */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Details */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold flex items-center -gap-2">
            {title}
            <span>🍔</span>
          </h3>
          <p className="text-xs text-gray-500 line-clamp-1">{description}ss</p>
        </div>

        <button onClick={()=>dispatch(RemoveFromCart({id}))}>
          <MdDeleteOutline size={20} className="text-red-600 cursor-pointer" />
        </button>
      </div>
      

      <div className="flex justify-between">
        {/* Price */}
        <div className="flex items-center gap-2 mt-1 px-2">
          <span className="font-semibold text-sm">{`$${price}`}</span>
          <span className="text-[10px] bg-pink-100 text-pink-600 px-2 py-[2px] rounded-full">
            30%
          </span>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-2 mt-2 px-2 text-[12px]">
          {quantity === 0 ? 
          <button
            onClick={() => dispatch(RemoveFromCart({ id }))}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          :
          <button
            onClick={() => dispatch(DecreaseQuantity({ id }))}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
        }
          
          <span>{quantity > 0 ? quantity : 0}</span>

          <button
            onClick={() => dispatch(IncreaseQuantity({ id }))}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuInCartCard;
