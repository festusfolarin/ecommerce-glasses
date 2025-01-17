import { useState } from "react";
import DeliveryInfo from "../components/checkout/DeliveryInfo";
import Payment from "../components/checkout/Payment";
import BackButton from "../components/ui/buttons/BackButton";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Checkout = () => {
  const { userCartSummary } = useSelector((state) => state.cart);

  const [customerDeliveryInfo, setCustomerDeliveryInfo] = useState({
    customerName: "",
    email: "",
    phoneNumber: "",
    deliveryAddress: "",
  });

  // if (userCartSummary.totalCartItems < 1 || userCartSummary.totalAmount < 1) {
  //   return <Navigate to={"/cart"} />;
  // }

  function handleInput(e) {
    const { name, value } = e.target;
    setCustomerDeliveryInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  console.log(customerDeliveryInfo);

  return (
    <section className="min-h-screen bg-gray-100 pt-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-2xl font-semibold">
          Complete your order
        </h1>

        <BackButton />
        <div>
          <DeliveryInfo
            customerName={customerDeliveryInfo.customerName}
            email={customerDeliveryInfo.email}
            phoneNumber={customerDeliveryInfo.phoneNumber}
            deliveryAddress={customerDeliveryInfo.deliveryAddress}
            handleInput={handleInput}
          />
          <Payment customerDeliveryInfo={customerDeliveryInfo} />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
