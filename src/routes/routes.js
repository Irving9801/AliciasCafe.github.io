import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Cart from "../pages/CartScreen";
import ShippingScreen from "../pages/ShippingScreen";
import PlaceholderScreen from "../pages/PlaceOrderScreen";
import OrderScreen from "../pages/OrderScreen";
import PaymentScreen from "../pages/PaymentScreen";
import Menu from "../pages/Menu";
import Recetas from "../pages/Recetas";
import Login from "../pages/Login";
import Homes from "../admin/pages/Home";
import Recipes from "../admin/pages/Recipes";
import Products from "../admin/pages/Products";
import Sales from "../admin/pages/dashboardSales";
import Tables from "../admin/pages/Tables";
import ListMenu from "../admin/pages/TablesMenu";
import TablesProducts from "../admin/pages/TablesProducts";
import Ecommerce from "../pages/ecommerce";
import Procedure from "../pages/procedure";
import DetalisEcommerce from "../pages/DetalisEcommerce";
import DetalisRecipes from "../admin/components/details/detailsRecipes";
import DetailsMenu from "../admin/components/details/detailsMenu";
import DetalisProducts from "../admin/components/details/detailsProducts";
import OrderListScreen from "../admin/pages/OrderListScreen";
import UserListScreen from "../admin/pages/UserListScreen";
import UserEditScreen from "../admin/pages/UserEditScreen";
function Connection() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/order/:id' element={<OrderScreen/>} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceholderScreen />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Recetas" element={<Recetas />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="*" element={<h1>404</h1>}></Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/tienda" element={<Ecommerce />} />
          <Route path="/procedure/:id" element={<Procedure />} />
          {/* <Main> */}
          <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />
          <Route path="/admin/details/:id" element={<DetalisRecipes />} />
          <Route path="/admin/products/:id" element={<DetalisProducts />} />
          <Route path="/admin/orderlist" element={<OrderListScreen />} />
          <Route path="/admin/menu/:id" element={<DetailsMenu />} />
          <Route path="/admin/dashboard" element={<Homes />} />
          <Route path="/admin/recipes" element={<Recipes />} />
          <Route path="/admin/user" element={<UserListScreen />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/tables" element={<Tables />} />
          <Route path="/admin/listProducts" element={<TablesProducts />} />
          <Route path="/admin/listMenu" element={<ListMenu />} />
          <Route path="/details/:id" element={<DetalisEcommerce />} />
          <Route path="/sales" element={<Sales />} />
          {/* </Main> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Connection;
