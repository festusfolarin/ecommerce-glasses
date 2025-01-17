import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  increaseCartItemQty,
  decreaseCartItemQty,
} from "../../features/cart/cartSlice";
import { formatCurrency } from "../../utils/helper";
import { Trash2 } from "lucide-react";

const CartItemCard = ({
  product_name,
  product_image,
  product_quantity,
  product_price,
  product_id,
}) => {
  const dispatch = useDispatch();
  return (
    <section>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={product_image}
          alt={product_name}
          className="w-full h-24 object-cover rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-semibold text-gray-900">
              {product_name}
            </h2>
            <p className="mt-1 text-sm text-gray-700">
              {formatCurrency(product_price)}
            </p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <button
                onClick={() => dispatch(decreaseCartItemQty(product_id))}
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-black hover:text-blue-50"
              >
                {" "}
                -{" "}
              </button>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                value={product_quantity}
              />
              <button
                onClick={() => dispatch(increaseCartItemQty(product_id))}
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-black hover:text-blue-50"
              >
                {" "}
                +{" "}
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm font-semibold">
                {formatCurrency(product_price * product_quantity)}
              </p>
              <button onClick={() => dispatch(removeItemFromCart(product_id))}>
                <Trash2 size={20} color="#dd4040" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItemCard;
