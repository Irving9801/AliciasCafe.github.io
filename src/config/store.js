import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "../redux/reducers/userReducers";
import { productosReducers } from "../redux/reducers/productosReducers";
import promise from "redux-promise";
import { ENVIRONMENT } from "../API";
import logger from "redux-logger";
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  productos: productosReducers,
  login:userLoginReducer
});
const initialState = {
  // cart: {
  //   cartItems: cartItemsFromStorage,
  //   shippingAddress: shippingAddressFromStorage,
  // },
//  productos: { userInfo: userInfoFromStorage },
};

const middleware = [thunk,promise];
if (ENVIRONMENT !== "prod") middleware.push(logger);

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
