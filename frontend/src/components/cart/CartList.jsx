import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { Link } from "react-router";

const CartList = () => {
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="mb-5">Sorry, no item in cart yet</h1>
        <Link
          className="bg-black px-3 py-1 hover:bg-[#4ADE80] text-sm text-white rounded-md font-light"
          to={"/store"}
        >
          Visit shop
        </Link>
      </div>
    );
  }

  return (
    <section>
      {cartItems.map((item) => {
        return (
          <CartItemCard
            key={item.product_id}
            product_id={item.product_id}
            product_image={item.product_image}
            product_name={item.product_name}
            product_price={item.product_price}
            product_quantity={item.product_quantity}
          />
        );
      })}
    </section>
  );
};

export default CartList;
