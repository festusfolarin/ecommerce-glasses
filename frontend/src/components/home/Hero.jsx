import { Link } from "react-router";
import CTAButton from "../ui/buttons/CTAButton";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100">
      <section className="py-10 sm:py-16 lg:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Where Comfort Meets
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Clarity.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Discover eyewear that blends style and functionality perfectly.
                From classic frames to trendy designs, we offer a wide selection
                to suit every face and personality.
              </p>
              <Link to="/store">
                <CTAButton buttonText={"Start Shopping"} />
              </Link>
            </div>

            <div>
              <img className="w-full" src="images/hero.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
