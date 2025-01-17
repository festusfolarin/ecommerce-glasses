import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import BackButton from "../components/ui/buttons/BackButton";

function Cart() {
  return (
    <section>
      <div className="min-h-screen bg-gray-100 pt-10">
        <h1 className="mb-10 text-center text-2xl font-semibold">Cart Items</h1>

        <BackButton />
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <CartList />
          </div>
          <CartSummary />
        </div>
      </div>
    </section>
  );
}

export default Cart;
