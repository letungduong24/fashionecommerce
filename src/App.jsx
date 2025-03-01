import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from "./components/Layout/UserLayout"
import Home from "./pages/Home"
import { Toaster } from "sonner"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import CollectionsPage from "./pages/CollectionsPage"
import ProductsDetails from "./components/Products/ProductsDetails"
import Checkout from "./components/Cart/Checkout"
import OrderConfirmation from "./pages/OrderConfirmation"
import OrderDetails from "./pages/OrderDetails"
import AdminLayout from "./components/Admin/AdminLayout"
import AdminHome from "./pages/AdminHome"
import UserManager from "./components/Admin/UserManager"
import OrderManager from "./components/Admin/OrderManager"

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="collections/:collection" element={<CollectionsPage />}></Route>
            <Route path="product/:id" element={<ProductsDetails />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route path="order-confirmation" element={<OrderConfirmation />}></Route>
            <Route path="order/:id" element={<OrderDetails />}></Route>
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />}></Route>
            <Route path="users" element={<UserManager />}></Route>
            <Route path="orders" element={<OrderManager />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
