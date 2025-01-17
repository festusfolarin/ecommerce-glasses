import { useParams } from "react-router";
import { productData } from "../../constants/products";
import { useEffect, useState } from "react";
import { Button, message } from "antd";
import { formatCurrency } from "../../utils/helper";
import { addItemToCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../ui/buttons/BackButton";

const ProductInfo = () => {
  const params = useParams();

  const [singleProduct, setSingleProduct] = useState(null);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [messageApi, contextHolder] = message.useMessage();

  function handleAddItemToCart() {
    const productInCart = cartItems.find(
      (item) => item.product_id === singleProduct.product_id
    );
    if (productInCart === undefined) {
      dispatch(addItemToCart(singleProduct));
      messageApi.success("Product added to cart");
    } else {
      messageApi.error("Item already in cart");
    }
  }

  useEffect(() => {
    const product = productData.find(
      (item) => item.product_id === Number(params.product_id)
    );
    setSingleProduct(product);
  }, []);

  if (singleProduct === null) {
    return (
      <section>
        <h1>Loading product info...</h1>
      </section>
    );
  }
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      {contextHolder}

      <div className="container px-10 py-24 mx-auto">
        <BackButton />
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={singleProduct.product_name}
            className="lg:w-1/3 w-full mx-auto object-cover object-center rounded-2xl border border-gray-200"
            src={singleProduct.product_image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {singleProduct.product_name}
            </h1>
            <p className="leading-relaxed">
              {singleProduct.product_description}
            </p>

            <div className="mt-5 title-font font-medium text-2xl text-gray-900">
              {formatCurrency(singleProduct.product_price)}
            </div>
            <Button
              onClick={handleAddItemToCart}
              color="default"
              variant="solid"
              className="mt-4"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
