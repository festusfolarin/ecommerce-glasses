import { Button } from "antd";
import { Link } from "react-router";
import { formatCurrency } from "../../utils/helper";

const ProductCard = ({
  product_id,
  product_name,
  product_image,
  product_price,
}) => {
  return (
    <section>
      <div className="relative group">
        <div className="overflow-hidden aspect-w-1 aspect-h-1">
          <img
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
            src={product_image}
            alt={product_name}
          />
        </div>
        {/* <div class="absolute left-3 top-3">
              <p class="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-semibold tracking-wide text-gray-900 uppercase bg-white rounded-full">
                New
              </p>
            </div> */}
        <div className="flex items-start justify-between mt-4 space-x-4">
          <div>
            <h3 className="text-xs font-semibold text-gray-900 sm:text-sm md:text-base">
              <Link to={`/store/${product_id}`}>
                {product_name}
                <span className="absolute inset-0" aria-hidden="true"></span>
              </Link>
            </h3>
            {/* <div class="flex items-center mt-2.5 space-x-px">
                  <svg
                    class="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    class="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    class="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    class="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    class="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div> */}
          </div>

          <div className="text-right">
            <p className="text-xs font-semibold text-gray-900 sm:text-sm md:text-base">
              {formatCurrency(product_price)}
            </p>
          </div>
        </div>
        <Link to={`/store/${product_id}`}>
          <Button color="default" variant="solid" className="mt-4" block>
            Add to cart
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProductCard;
