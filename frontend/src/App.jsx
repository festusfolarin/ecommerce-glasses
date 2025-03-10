import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import MainLayout from "./layout/MainLayout";
import Checkout from "./pages/Checkout";
import Admin from "./pages/protected/Admin";
import OrderDetails from "./pages/protected/OrderDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/protected/UserProfile";
import ProtectedLayout from "./layout/ProtectedLayout";
import ProtectedAdminLayout from "./layout/ProtectedAdminLayout";

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

        <Route element={<ProtectedLayout />}>
          <Route path="/admin" element={<ProtectedAdminLayout />}>
            <Route index element={<Admin />} />
            <Route path=":order_id" element={<OrderDetails />} />
          </Route>

          <Route path="/profile" element={<UserProfile />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
