import { usePaystackPayment } from "react-paystack";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { clearUserCartItems } from "../../features/cart/cartSlice";
import { serverUrl } from "../../utils/helper";
import axios from "axios";

const paystack_secret_key = import.meta.env.VITE_PAYSTACK_TEST_KEY;

const Payment = ({ customerDeliveryInfo }) => {
  const { userCartSummary, cartItems } = useSelector((state) => state.cart);

  const config = {
    reference: new Date().getTime().toString(),
    email: customerDeliveryInfo.email,
    amount: userCartSummary.totalAmount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: paystack_secret_key,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = async (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    //send these to backend
    console.log(reference);
    console.log(userCartSummary);
    console.log(cartItems);
    console.log(customerDeliveryInfo);

    try {
      if (reference) {
        //send info to backend
        const response = await axios.post(`${serverUrl}/order/create-order`, {
          reference: reference,
          customerDeliveryInfo: customerDeliveryInfo,
          userCartSummary: userCartSummary,
          cartItems: cartItems,
        });
        console.log(response);

        //clear local storage
        localStorage.removeItem("cartSummary");
        localStorage.removeItem("cartItems");

        dispatch(clearUserCartItems());
        alert("Thank you for your order!");
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  function handlePaystackPayment() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userCartSummary.totalCartAmount < 10) {
      return alert("Sorry, can't place order below 10");
    }
    if (emailRegex.test(customerDeliveryInfo.email) === false) {
      return alert("Please enter a valid email");
    }
    // console.log(config);

    initializePayment({ onSuccess, onClose });
  }
  return (
    <section className="text-center">
      <button
        className="text-white rounded-md px-4 py-1 bg-black"
        onClick={handlePaystackPayment}
      >
        Pay now
      </button>
    </section>
  );
};

export default Payment;
