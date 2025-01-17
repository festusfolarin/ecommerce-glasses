import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helper";
import { useNavigate } from "react-router";
import { message } from "antd";

const CartSummary = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const { userCartSummary } = useSelector((state) => state.cart);

  function handleCheckout() {
    if (userCartSummary.totalCartItems < 1 || userCartSummary.totalAmount < 1) {
      messageApi.error("Cart is currently empty, add items to checkout");
      return navigate("/cart");
    }
    navigate("/checkout");
  }

  return (
    <section className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      {contextHolder}
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">
          {formatCurrency(userCartSummary.totalAmount)}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">$4.99</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">
          Total ({userCartSummary.totalCartItems})
        </p>
        <div className="">
          <p className="mb-1 text-lg font-semibold">
            {formatCurrency(userCartSummary.totalAmount)}
          </p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        className="mt-6 w-full rounded-md bg-black py-1.5 text-white hover:bg-[#4ADE80]"
      >
        Checkout
      </button>
    </section>
  );
};

export default CartSummary;
