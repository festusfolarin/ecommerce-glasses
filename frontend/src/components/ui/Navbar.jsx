import { Link, NavLink } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav className=" px-9 py-5 sticky top-0 z-[9999] text-white bg-black">
      <section className="container mx-auto flex justify-between items-center">
        <div className="relative inline-flex">
          <span className="absolute inset-x-0 bottom-0 border-b-[13px] border-[#4ADE80]"></span>
          <Link to={"/"}>
            <h1 className="relative text-2xl font-semibold text-white  tracking-wider">
              Lucienne
            </h1>
          </Link>
        </div>
        {/* <NavLink to={"/"}>
          <h1 className="text-2xl text-white font-semibold tracking-wider">
            Lucienne
          </h1>
        </NavLink> */}
        <div className="flex gap-9">
          <NavLink className={"tracking-wider hover:text-[#4ADE80]"} to={"/"}>
            Home
          </NavLink>
          <NavLink
            className={"tracking-wider hover:text-[#4ADE80]"}
            to={"/store"}
          >
            Store
          </NavLink>
          <NavLink className={"hover:text-[#4ADE80]"} to={"/cart"}>
            <div className="flex gap-2">
              <ShoppingCart />
              <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-[#4ADE80] text-white">
                {cartItems.length}
              </span>

              {/* <p className="bg-[#4ADE80] rounded-full px-1">
                {cartItems.length}
              </p> */}
            </div>
          </NavLink>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
