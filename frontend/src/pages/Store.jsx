import AllProducts from "../components/products/AllProducts";

function Store() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Eyewear for Every Occasion
        </h2>
        <p className="mt-4 text-base font-normal leading-7 text-gray-600">
          Elevate your vision and express your unique style with glasses crafted
          for comfort and clarity.
        </p>
      </div>
      <AllProducts />
    </section>
  );
}

export default Store;
