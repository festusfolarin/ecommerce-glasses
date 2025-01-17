import ProductCard from "./ProductCard";
import { productData } from "../../constants/products";

function ProductList() {
  return (
    <section>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
          {productData.map((item) => {
            return (
              <ProductCard
                key={item.product_id}
                product_name={item.product_name}
                product_price={item.product_price}
                product_image={item.product_image}
                product_quantity={item.product_quantity}
                product_id={item.product_id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
