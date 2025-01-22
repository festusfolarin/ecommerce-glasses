import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import MainLayout from "./layout/MainLayout";
import Checkout from "./pages/Checkout";
import Admin from "./pages/protected/Admin";
import OrderDetails from "./pages/protected/OrderDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="store">
          <Route index element={<Store />} />
          <Route path=":product_id" element={<ProductDetails />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin">
          <Route index element={<Admin />} />
          <Route path=":order_id" element={<OrderDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
