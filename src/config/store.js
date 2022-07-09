import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "../redux/reducers/userReducers";
import { productosReducers } from "../redux/reducers/productosReducers";
import promise from "redux-promise";
import { ENVIRONMENT } from "../API";
import logger from "redux-logger";
import { recipesReducers } from "../redux/reducers/recipesReducers";
import { cartReducer } from "../redux/reducers/cartReducers";
import {
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPayReducer,
} from "../redux/reducers/orderReducers";
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  productos: productosReducers,
  login: userLoginReducer,
  recipes: recipesReducers,
  userList: userListReducer ,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  login: { isAuthenticate: false, userInfo: userInfoFromStorage },
};

const middleware = [thunk, promise];
if (ENVIRONMENT !== "prod") middleware.push(logger);

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
