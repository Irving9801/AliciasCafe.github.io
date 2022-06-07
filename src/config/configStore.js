/** @format */

import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import promise from "redux-promise";
import thunk from "redux-thunk";
import Reducers from "../redux/reducer/index";
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "@cmfAppKeyPrimary",
  storage: sessionStorage,
  timeout: 0,
  whitelist: ["Authentication"],
  blacklist: ["onboardingdetails"], // navigation will not be persisted
};

let middlewares = [thunk, promise];

// if (ENVIRONMENT !== "prod") middlewares.push(logger);

const persistedReducer = persistReducer(persistConfig, Reducers);

const configureStore = () => {
  return createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares))
  );
};
const store = configureStore();
const persistor = persistStore(store);

export { store, persistor };
