import axios from "axios";
import { Navigate } from "react-router-dom";
import { AC_MAIN } from "../../API.js";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  CART_CLEAR_ITEMS,
} from "../../constants/userConstants.js";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${AC_MAIN}api/produts/${id}`);
  console.log(data);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.nameProdut,
      image: data.imagesList[0][0],
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });
    const { login } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${login.userInfo.token}`,
      },
    };

    const { data } = await axios.post(`${AC_MAIN}api/orders`, order, config);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: CART_CLEAR_ITEMS,
      payload: data,
    });
    localStorage.removeItem("cartItems");
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      // dispatch(logout())
    }
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    });
  }
};
